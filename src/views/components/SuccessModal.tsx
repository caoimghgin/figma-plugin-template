import { h } from 'preact'
import { Modal, Button, MiddleAlign, Stack } from '@create-figma-plugin/ui'

// @ts-ignore
export const SuccessModal = ({ message, show, toggle, complete }) => {

    const title = `${message} rectangles created!`
    const style = { width: '240px', height: '160px' }

    return (
        <Modal onOverlayClick={toggle} onCloseButtonClick={toggle} open={show} title={title}>
            <div style={style}>
                <MiddleAlign>
                    <Stack space="small">
                        <Button onClick={complete} fullWidth> Done </Button>
                        <Button onClick={toggle} fullWidth secondary> Create more rectangles </Button>
                    </Stack>
                </MiddleAlign>
            </div>
        </Modal >
    )

}