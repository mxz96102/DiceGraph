import { Graph } from "@antv/g6/es";
import { GraphOptions } from "@antv/g6/es/types";
export default class DiceGraph<DataType = {}, ConfigType = {}> {
    protected graph: Graph | null;
    protected G6Core: {
        version: string;
        Graph: typeof Graph;
        TreeGraph: typeof import("@antv/g6/es").TreeGraph;
        Util: {
            mixColor: (backColor: any, frontColor: any, frontAlpha: any) => any;
            getColorsWithSubjectColor: (subjectColor: any, backColor?: string, theme?: "default" | "dark", disableColor?: string) => {
                mainStroke: any;
                mainFill: any;
                activeStroke: any;
                activeFill: any;
                inactiveStroke: any;
                inactiveFill: any;
                selectedStroke: any;
                selectedFill: string;
                highlightStroke: any;
                highlightFill: any;
                disableStroke: any;
                disableFill: any;
                edgeMainStroke: any;
                edgeActiveStroke: any;
                edgeInactiveStroke: any;
                edgeSelectedStroke: any;
                edgeHighlightStroke: any;
                edgeDisableStroke: any;
                comboMainStroke: any;
                comboMainFill: any;
                comboActiveStroke: any;
                comboActiveFill: any;
                comboInactiveStroke: any;
                comboInactiveFill: any;
                comboSelectedStroke: any;
                comboSelectedFill: any;
                comboHighlightStroke: any;
                comboHighlightFill: any;
                comboDisableStroke: any;
                comboDisableFill: any;
            };
            getLineIntersect: (p0: import("_@antv_g-base@0.5.1@@antv/g-base").Point, p1: import("_@antv_g-base@0.5.1@@antv/g-base").Point, p2: import("_@antv_g-base@0.5.1@@antv/g-base").Point, p3: import("_@antv_g-base@0.5.1@@antv/g-base").Point) => import("_@antv_g-base@0.5.1@@antv/g-base").Point;
            getRectIntersectByPoint: (rect: import("@antv/g6/es/types").IRect, point: import("_@antv_g-base@0.5.1@@antv/g-base").Point) => import("_@antv_g-base@0.5.1@@antv/g-base").Point;
            getCircleIntersectByPoint: (circle: import("@antv/g6/es/types").ICircle, point: import("_@antv_g-base@0.5.1@@antv/g-base").Point) => import("_@antv_g-base@0.5.1@@antv/g-base").Point;
            getEllipseIntersectByPoint: (ellipse: import("@antv/g6/es/types").IEllipse, point: import("_@antv_g-base@0.5.1@@antv/g-base").Point) => import("_@antv_g-base@0.5.1@@antv/g-base").Point;
            applyMatrix: (point: import("_@antv_g-base@0.5.1@@antv/g-base").Point, matrix: import("@antv/g6/es/types").Matrix, tag?: 0 | 1) => import("_@antv_g-base@0.5.1@@antv/g-base").Point;
            invertMatrix: (point: import("_@antv_g-base@0.5.1@@antv/g-base").Point, matrix: import("@antv/g6/es/types").Matrix, tag?: 0 | 1) => import("_@antv_g-base@0.5.1@@antv/g-base").Point;
            getCircleCenterByPoints: (p1: import("_@antv_g-base@0.5.1@@antv/g-base").Point, p2: import("_@antv_g-base@0.5.1@@antv/g-base").Point, p3: import("_@antv_g-base@0.5.1@@antv/g-base").Point) => import("_@antv_g-base@0.5.1@@antv/g-base").Point;
            distance: (p1: import("_@antv_g-base@0.5.1@@antv/g-base").Point, p2: import("_@antv_g-base@0.5.1@@antv/g-base").Point) => number;
            scaleMatrix: (matrix: import("@antv/g6/es/types").Matrix[], ratio: number) => import("@antv/g6/es/types").Matrix[];
            floydWarshall: (adjMatrix: import("@antv/g6/es/types").Matrix[]) => import("@antv/g6/es/types").Matrix[];
            getAdjMatrix: (data: import("@antv/g6/es/types").GraphData, directed: boolean) => import("@antv/g6/es/types").Matrix[];
            translate: (group: import("_@antv_g-base@0.5.1@@antv/g-base").IGroup, vec: import("_@antv_g-base@0.5.1@@antv/g-base").Point) => void;
            move: (group: import("_@antv_g-base@0.5.1@@antv/g-base").IGroup, point: import("_@antv_g-base@0.5.1@@antv/g-base").Point) => void;
            scale: (group: import("_@antv_g-base@0.5.1@@antv/g-base").IGroup, ratio: number | number[]) => void;
            rotate: (group: import("_@antv_g-base@0.5.1@@antv/g-base").IGroup, angle: number) => void;
            getDegree: (n: number, nodeIdxMap: import("@antv/g6/es/types").NodeIdxMap, edges: import("@antv/g6/es/types").EdgeConfig[]) => number[];
            isPointInPolygon: (points: number[][], x: number, y: number) => boolean;
            intersectBBox: (box1: Partial<import("@antv/g6/es/types").IBBox>, box2: Partial<import("@antv/g6/es/types").IBBox>) => boolean;
            isPolygonsIntersect: (points1: number[][], points2: number[][]) => boolean;
            Line: typeof import("@antv/g6/es/util/math").Line;
            getBBoxBoundLine: (bbox: import("@antv/g6/es/types").IBBox, direction: string) => any;
            itemIntersectByLine: (item: import("@antv/g6/es/types").Item, line: import("@antv/g6/es/util/math").Line) => [import("@antv/g6/es/types").IPoint[], number];
            fractionToLine: (item: import("@antv/g6/es/types").Item, line: import("@antv/g6/es/util/math").Line) => number;
            getPointsCenter: (points: import("@antv/g6/es/types").IPoint[]) => import("@antv/g6/es/types").IPoint;
            squareDist: (a: import("@antv/g6/es/types").IPoint, b: import("@antv/g6/es/types").IPoint) => number;
            pointLineSquareDist: (point: import("@antv/g6/es/types").IPoint, line: import("@antv/g6/es/util/math").Line) => number;
            isPointsOverlap: (p1: any, p2: any, e?: number) => boolean;
            pointRectSquareDist: (point: import("_@antv_g-base@0.5.1@@antv/g-base").Point, rect: import("@antv/g6/es/types").IRect) => number;
            roundedHull(polyPoints: number[][], padding: number): string;
            paddedHull(polyPoints: number[][], padding: number): string | {
                x: number;
                y: number;
            }[];
            getSpline: (points: import("@antv/g6/es/types").IPoint[]) => any[][];
            getControlPoint: (startPoint: import("@antv/g6/es/types").IPoint, endPoint: import("@antv/g6/es/types").IPoint, percent?: number, offset?: number) => import("@antv/g6/es/types").IPoint;
            pointsToPolygon: (points: import("@antv/g6/es/types").IPoint[], z?: boolean) => string;
            pathToPoints: (path: any[]) => any[];
            getClosedSpline: (points: import("@antv/g6/es/types").IPoint[]) => any[];
            getBBox: (element: import("@antv/g6/es/types").IShapeBase, group: import("_@antv_g-canvas@0.5.3@@antv/g-canvas/lib/group").default) => import("@antv/g6/es/types").IBBox;
            getLoopCfgs: (cfg: import("@antv/g6/es/types").EdgeData) => import("@antv/g6/es/types").EdgeData;
            getLabelPosition: (pathShape: import("_@antv_g-canvas@0.5.3@@antv/g-canvas/lib/shape/path").default, percent: number, refX: number, refY: number, rotate: boolean) => Partial<{
                rotate: number;
                textAlign: string;
                angle: number;
                x: number;
                y: number;
                text: string;
                stroke: string;
                opacity: number;
                fontSize: number;
                fontStyle: string;
                fill: string;
                rotateCenter: string;
                lineWidth?: number;
                shadowColor?: string;
                shadowBlur?: number;
                shadowOffsetX?: number;
                shadowOffsetY?: number;
                position: string;
                textBaseline: string;
                offset: number;
                background?: {
                    fill?: string;
                    stroke?: string;
                    lineWidth?: number;
                    radius?: number | number[];
                    padding?: number | number[];
                };
            }>;
            traverseTree: <T extends {
                children?: T[];
            }>(data: T, fn: (param: T) => boolean) => void;
            traverseTreeUp: <T_1 extends {
                children?: T_1[];
            }>(data: T_1, fn: (param: T_1) => boolean) => void;
            radialLayout: (data: import("@antv/g6/es/util/graphic").TreeGraphDataWithPosition, layout?: string) => import("@antv/g6/es/util/graphic").TreeGraphDataWithPosition;
            getLetterWidth: (letter: any, fontSize: any) => number;
            getTextSize: (text: any, fontSize: any) => any[];
            plainCombosToTrees: (array: import("@antv/g6/es/types").ComboConfig[], nodes?: import("@antv/g6/es/types").NodeConfig[]) => import("@antv/g6/es/types").ComboTree[];
            reconstructTree: (trees: import("@antv/g6/es/types").ComboTree[], subtreeId?: string, newParentId?: string) => import("@antv/g6/es/types").ComboTree[];
            getComboBBox: (children: import("@antv/g6/es/types").ComboTree[], graph: import("@antv/g6/es/interface/graph").IGraph) => import("_@antv_g-math@0.1.5@@antv/g-math/lib/types").BBox;
            getChartRegion: (params: {
                group: import("_@antv_g-canvas@0.5.3@@antv/g-canvas/lib/group").default;
                width: number;
                height: number;
                x: number;
                y: number;
            }) => {
                start: {
                    x: number;
                    y: number;
                };
                end: {
                    x: number;
                    y: number;
                };
            };
            formatPadding: (padding: import("@antv/g6/es/types").Padding) => number[];
            cloneEvent: (e: import("@antv/g6/es/types").IG6GraphEvent) => import("@antv/g6/es/interface/behavior").G6GraphEvent;
            isViewportChanged: (matrix: import("@antv/g6/es/types").Matrix) => boolean;
            isNaN: (input: any) => boolean;
            calculationItemsBBox: (items: import("@antv/g6/es/types").Item[]) => {
                x: number;
                y: number;
                width: number;
                height: number;
                minX: number;
                minY: number;
                maxX: number;
                maxY: number;
            };
            processParallelEdges: (edges: any, offsetDiff?: number) => any;
            mat3: any;
            mix: typeof import("_@antv_util@2.0.9@@antv/util").mix;
            deepMix: (rst: any, ...args: any[]) => any;
            transform: (m: any, ts: any) => any;
        };
        registerNode: typeof import("@antv/g6/es/shape").default.registerNode;
        registerEdge: typeof import("@antv/g6/es/shape").default.registerEdge;
        registerCombo: typeof import("@antv/g6/es/shape").default.registerCombo;
        registerBehavior: typeof import("@antv/g6/es/behavior").default.registerBehavior;
        registerLayout: <Cfg>(type: string, layout: Partial<import("@antv/g6/es/interface/layout").ILayout<Cfg>>, layoutCons?: new () => import("@antv/g6/es/layout/layout").BaseLayout<Cfg>) => void;
        Layout: {
            [layoutType: string]: any;
            registerLayout<Cfg_1>(type: string, layout: Partial<import("@antv/g6/es/interface/layout").ILayout<Cfg_1>>, layoutCons?: new () => import("@antv/g6/es/layout/layout").BaseLayout<Cfg_1>): void;
        };
        Global: {
            version: string;
            rootContainerClassName: string;
            nodeContainerClassName: string;
            edgeContainerClassName: string;
            comboContainerClassName: string;
            customGroupContainerClassName: string;
            delegateContainerClassName: string;
            defaultLoopPosition: string;
            nodeLabel: {
                style: {
                    fill: string;
                    fontSize: number;
                    textAlign: string;
                    textBaseline: string;
                };
                offset: number;
            };
            defaultNode: {
                type: string;
                style: {
                    lineWidth: number;
                    stroke: any;
                    fill: any;
                };
                size: number;
                color: any;
                linkPoints: {
                    size: number;
                    lineWidth: number;
                    fill: any;
                    stroke: any;
                };
            };
            nodeStateStyles: {
                active: {
                    fill: any;
                    stroke: any;
                    lineWidth: number;
                    shadowColor: any;
                    shadowBlur: number;
                };
                selected: {
                    fill: string;
                    stroke: any;
                    lineWidth: number;
                    shadowColor: any;
                    shadowBlur: number;
                    'text-shape': {
                        fontWeight: number;
                    };
                };
                highlight: {
                    fill: any;
                    stroke: any;
                    lineWidth: number;
                    'text-shape': {
                        fontWeight: number;
                    };
                };
                inactive: {
                    fill: any;
                    stroke: any;
                    lineWidth: number;
                };
                disable: {
                    fill: any;
                    stroke: any;
                    lineWidth: number;
                };
            };
            edgeLabel: {
                style: {
                    fill: string;
                    textAlign: string;
                    textBaseline: string;
                    fontSize: number;
                };
            };
            defaultEdge: {
                type: string;
                size: number;
                style: {
                    stroke: any;
                    lineAppendWidth: number;
                };
                color: any;
            };
            edgeStateStyles: {
                active: {
                    stroke: any;
                    lineWidth: number;
                };
                selected: {
                    stroke: any;
                    lineWidth: number;
                    shadowColor: any;
                    shadowBlur: number;
                    'text-shape': {
                        fontWeight: number;
                    };
                };
                highlight: {
                    stroke: any;
                    lineWidth: number;
                    'text-shape': {
                        fontWeight: number;
                    };
                };
                inactive: {
                    stroke: any;
                    lineWidth: number;
                };
                disable: {
                    stroke: any;
                    lineWidth: number;
                };
            };
            comboLabel: {
                style: {
                    fill: string;
                    textBaseline: string;
                    fontSize: number;
                };
                refY: number;
                refX: number;
            };
            defaultCombo: {
                type: string;
                style: {
                    fill: any;
                    lineWidth: number;
                    stroke: any;
                    r: number;
                    width: number;
                    height: number;
                };
                size: number[];
                color: any;
                padding: number[];
            };
            comboStateStyles: {
                active: {
                    stroke: any;
                    lineWidth: number;
                    fill: any;
                };
                selected: {
                    stroke: any;
                    lineWidth: number;
                    fill: any;
                    shadowColor: any;
                    shadowBlur: number;
                    'text-shape': {
                        fontWeight: number;
                    };
                };
                highlight: {
                    stroke: any;
                    lineWidth: number;
                    fill: any;
                    'text-shape': {
                        fontWeight: number;
                    };
                };
                inactive: {
                    stroke: any;
                    fill: any;
                    lineWidth: number;
                };
                disable: {
                    stroke: any;
                    fill: any;
                    lineWidth: number;
                };
            };
            delegateStyle: {
                fill: string;
                fillOpacity: number;
                stroke: string;
                strokeOpacity: number;
                lineDash: number[];
            };
            textWaterMarkerConfig: {
                width: number;
                height: number;
                compatible: boolean;
                text: {
                    x: number;
                    y: number;
                    lineHeight: number;
                    rotate: number;
                    fontSize: number;
                    fontFamily: string;
                    fill: string;
                    baseline: string;
                };
            };
            imageWaterMarkerConfig: {
                width: number;
                height: number;
                compatible: boolean;
                image: {
                    x: number;
                    y: number;
                    width: number;
                    height: number;
                    rotate: number;
                };
            };
            waterMarkerImage: string;
        };
        Minimap: typeof import("@antv/g6/es/plugins/minimap").default;
        Grid: typeof import("@antv/g6/es/plugins/grid").default;
        Bundling: typeof import("@antv/g6/es/plugins/bundling").default;
        Menu: typeof import("@antv/g6/es/plugins/menu").default;
        ToolBar: typeof import("@antv/g6/es/plugins/toolBar").default;
        Tooltip: typeof import("@antv/g6/es/plugins/tooltip").default;
        TimeBar: typeof import("@antv/g6/es/plugins/timeBar").default;
        Fisheye: typeof import("@antv/g6/es/plugins/fisheye").default;
        ImageMinimap: typeof import("@antv/g6/es/plugins/imageMinimap").default;
        EdgeFilterLens: typeof import("@antv/g6/es/plugins/edgeFilterLens").default;
        Algorithm: typeof import("@antv/g6/es/algorithm");
        Arrow: {
            triangle: (width?: number, length?: number, d?: number) => string;
            vee: (width?: number, length?: number, d?: number) => string;
            circle: (r?: number, d?: number) => string;
            rect: (width?: number, length?: number, d?: number) => string;
            diamond: (width?: number, length?: number, d?: number) => string;
            triangleRect: (tWidth?: number, tLength?: number, rWidth?: number, rLength?: number, gap?: number, d?: number) => string;
        };
        Marker: {
            collapse: (x: any, y: any, r: any) => any[][];
            expand: (x: any, y: any, r: any) => any[][];
            upTriangle: (x: any, y: any, r: any) => any[][];
            downTriangle: (x: any, y: any, r: any) => any[][];
        };
    };
    protected data: DataType;
    protected tree: boolean;
    protected el: HTMLElement;
    protected config: GraphOptions;
    protected colors: {
        color?: string;
        bgColor?: string;
    };
    constructor(config?: Partial<GraphOptions>, colors?: DiceGraph['colors']);
    getGraph: () => Graph;
    protected createGraph: (el: HTMLElement | string) => Graph;
    mount(el: HTMLElement | string): void;
    setData: (data: DataType) => this;
    getData: () => DataType;
    protected registerCustomSetting(): void;
    protected checkData: (data: DataType) => boolean;
    dataTransform(data: DataType): DataType;
    beforeRender(): void;
    afterRender(): void;
    render(): void;
}
