class AttributModel {
  name: string;
  type: string;
  visibility: VisibilityEnum;

  constructor(name: string, type: string, visibility: VisibilityEnum) {
    this.name = name;
    this.type = type;
    this.visibility = visibility;
  }
}
