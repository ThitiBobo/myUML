class ClassModel {
  name: string;
  attributs: AttributModel[];
  methods: MethodModel[];
  abstract: boolean;

  constructor(name: string, attributs: AttributModel[], methods: MethodModel[], abstract: boolean) {
    this.name = name;
    this.attributs = attributs;
    this.methods = methods;
    this.abstract = abstract;
  }
}
