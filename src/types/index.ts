export interface Dictionary<T> {
  [key: string]: T;
}
export interface State {
  components: string[];
  draggedOverComponent: ISection | null;
  json: ISection[];
  projectFont: string;
  projectName: string;
  selectedComponent: ISection | null;
  transparentMenu: string;
}

export interface ISection {
  attributes: IAttributes;
  componentLabel: string;
  componentName: string;
  id?: string;
}

export interface IAlignment {
  alignItems: string;
  justifyContent: string;
}

export interface IAttributes {
  alignment?: IAlignment;
  buttonColor?: string;
  bgColor?: string;
  colGap?: string;
  columns?: string;
  description?: string;
  dribbble?: string;
  instagram?: string;
  itemCount?: string;
  hasColGap?: boolean;
  hasSectionGap?: boolean;
  height?: string;
  linkedIn?: string;
  mail?: string;
  other?: string;
  resizable?: boolean;
  reversed?: boolean;
  subtitle?: string;
  textColor?: string;
  title?: string;
  [key: string]: string | boolean | IAlignment | undefined;
}
