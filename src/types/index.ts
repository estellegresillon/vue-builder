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
  id: string;
}

export type ChildrenProps = {
  sInBuilder: boolean;
  section: ISection;
  resizeRef: any;
};

export type ComponentProps = any & {
  componentName: string;
};

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
  [attributeKey: string]: string | boolean | IAlignment | undefined;
}
