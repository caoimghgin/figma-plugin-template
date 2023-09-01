export const createRectangles = (count: number) => {

    const color = { r: 1, g: 0.5, b: 0 }
    const nodes: SceneNode[] = []

    for (let i = 0; i < count; i++) {
        const rect = figma.createRectangle()
        rect.x = i * 150
        rect.fills = [{ type: 'SOLID', color: color}]
        figma.currentPage.appendChild(rect)
        nodes.push(rect)
    }

    figma.currentPage.selection = nodes
    figma.viewport.scrollAndZoomIntoView(nodes)

}