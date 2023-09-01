
import { h, JSX } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { Button, Container, Inline, Stack, Text, Textbox, VerticalSpace, render } from '@create-figma-plugin/ui'
import { emit, on } from '@create-figma-plugin/utilities'
import { CreateRectanglesEvent, RectanglesCreatedEvent, ClosePluginEvent } from '../events/handlers'
import { SuccessModal } from './components/SuccessModal'

function App() {

    // The useState properties with initializers and getter/setter methods
    const [count, setCount] = useState<string>("5")
    const [showCompletedModal, setShowCompletedModal] = useState<boolean>(false)

    // The useEffect hook for 'appDidLaunch' lifecycle to listen to events sent
    // by controller.ts (or from anywhere)
    useEffect(() => {
        on<RectanglesCreatedEvent>('RECTANGLES_CREATED_EVENT', () => {
            setShowCompletedModal(true);
        })
    }, [])

    // The useEffect hook that observes the useState property of 'count' when 
    // setCount(newValue) is called with a new value – only logs to console so  
    // this can be be deleted
    useEffect(() => {
        console.log("Count has been set ->", count)
    }, [count])

    // Handler method updating the useState property of 'count' upon click event
    const handleSetCount = (event: JSX.TargetedMouseEvent<HTMLInputElement>) => {
        setCount(event.currentTarget.value)
    }

    // Handler method updating the useState property of 'showCompleteModal' which
    // toggles the visiblity of CompleteModal.tsx
    const handleShowCompletedModel = () => {
        setShowCompletedModal(!showCompletedModal)
    }

    // Handler method that sends 'CreateRectanglesEvent' which is listened to
    // by controller.ts to create the rectangles
    const handleCreateRectangles = () => {
        emit<CreateRectanglesEvent>("CREATE_RECTANGLES", count)
    }

    // Handler method that sends the 'ClosePluginEvent' which is listened 
    // to by controller.ts to quit the plugin
    const handleClosePlugin = () => {
        emit<ClosePluginEvent>("CLOSE_PLUGIN")
    }

    // Return rendered view
    return (
        <Container space="medium">
            <VerticalSpace space="extraLarge" />
            <Text><h2><b>Rectangle Creator</b></h2></Text>
            <VerticalSpace space="medium" />
            <Text>A template for creating Figma plugins using <b>@create-figma-plugin/ui</b> that provides a library of Preact components styled on Figma editor’s UI. </Text>
            <VerticalSpace space="medium" />
            <Stack space="medium">
                <Inline space="extraSmall">
                    <p>Count:</p>
                    <Textbox variant="border" value={count} onInput={handleSetCount} />
                </Inline>
                <Inline space="small">
                    <Button onClick={handleCreateRectangles}>Create</Button>
                    <Button onClick={handleClosePlugin} secondary>Cancel</Button>
                </Inline>
            </Stack>
            <SuccessModal message={count} show={showCompletedModal} toggle={handleShowCompletedModel} complete={handleClosePlugin} />
        </Container>
    )

}

export default render(App)