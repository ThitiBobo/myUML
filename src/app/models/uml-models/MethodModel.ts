class MethodModel {
  name: string;
  type: string;
  visibility: VisibilityEnum;
  inputTypes: string[];

  constructor(name: string, type: string, visibility: VisibilityEnum, inputTypes: string[]) {
    this.name = name;
    this.type = type;
    this.visibility = visibility;
    this.inputTypes = inputTypes;
  }
}
