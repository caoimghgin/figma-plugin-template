import { showUI, on, emit } from '@create-figma-plugin/utilities'
import { ClosePluginEvent, CreateRectanglesEvent, RectanglesCreatedEvent } from '../events/handlers'
import { createRectangles } from './utilities/createRectangles'

export default function () {

    // Tell Figma the size the plugin UI window.
    showUI({ height: 220, width: 300 })

    on<CreateRectanglesEvent>('CREATE_RECTANGLES', (count) => {

        // 1) Create a number rectangles in Figma.
        // 2) Send event communicating rectangles have been created so App.tsx 
        // (which is listening for this event) can respond with SuccessModal.tsx

        createRectangles(parseInt(count))
        emit<RectanglesCreatedEvent>('RECTANGLES_CREATED_EVENT')
    })

    on<ClosePluginEvent>('CLOSE_PLUGIN', () => {

        // Quit the plugin
        figma.closePlugin()
    })
}