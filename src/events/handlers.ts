import { EventHandler } from '@create-figma-plugin/utilities'

export interface CreateRectanglesEvent extends EventHandler {
  name: 'CREATE_RECTANGLES'
  handler: (count: string) => void
}

export interface RectanglesCreatedEvent extends EventHandler {
  name: 'RECTANGLES_CREATED_EVENT'
  handler: () => void
}

export interface ClosePluginEvent extends EventHandler {
  name: 'CLOSE_PLUGIN'
  handler: () => void
}