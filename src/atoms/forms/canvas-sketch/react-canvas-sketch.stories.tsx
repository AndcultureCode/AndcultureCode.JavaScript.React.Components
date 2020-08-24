import React from "react";
import { boolean, text, number } from "@storybook/addon-knobs";
import { ReactCanvasSketch } from "./react-canvas-sketch";
import { CanvasDrawToolSettings } from "./tools/base-canvas-draw-tool";
import { CanvasToolType } from "./enums/canvas-tool-type";

export default {
    component: ReactCanvasSketch,
    title: "Atoms | Forms / Canvas Sketch",
};

export const reactCanvasSketch = () => (
    <ReactCanvasSketch
        backgroundImageUrl={text("Background Image URL", "https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._AC_SL1200_.jpg")}
        canvasHeight={number("Canvas Height", 500)}
        canvasWidth={number("Canvas Width", 1000)}
        className={text("Class Name", "")}
        containerHeight={number("Container Height", 300)}
        containerWidth={number("Container Width", 600)}
        onAddedStroke={(strokeSettings: CanvasDrawToolSettings) => { console.log(`onAddedStroke: ${JSON.stringify(strokeSettings)}`) }}
        redrawIncrement={number("Redraw Trigger Increment", 1)}
        canvasToolType={CanvasToolType.pan} // how to define a list of available canvas tool types?
        toolWidth={number("Tool Width", 1)}
        toolColor={text("Tool Color", "FFFFFF")}
        value={{ currentObjectIndex: 0, objects: [] }}
    />
);