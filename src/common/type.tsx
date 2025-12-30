import PubSub from './PubSub'
import { EditorContextProps } from '../components/EditorContext'
import { Stage } from 'konva/lib/Stage'
import { Layer } from 'konva/lib/Layer'

export interface DrawEventParams extends EditorContextProps {
  event?: any;
  stage: Stage;
  imageLayer: Layer;
  drawLayer: Layer;
  imageData: ImageData;
  reload: (imageObj: any, rectWidth: number, rectHeigh: number) => void;
  historyStack: any[];
  pixelRatio: number;
  pubSub: InstanceType<typeof PubSub>;
}
export type PluginParamName = 'strokeWidth' | 'color' | 'fontSize' | 'lineType'
export interface PluginParamValue {
  strokeWidth?: number;
  color?: string;
  fontSize?: number;
  lineType?: 'solid' | 'dash';
}