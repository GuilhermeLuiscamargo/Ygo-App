export function fillstring(inputs: IfilterInputsObject) {
  const filtros: string[] = [];
  if (inputs) {
    if (inputs.archetype) {
      filtros.push(`&archetype=${inputs.archetype}`);
    }
    if (inputs.atk) {
      filtros.push(`&atk=${inputs.atk}`);
    }
    if (inputs.attribute) {
      filtros.push(`&attribute=${inputs.attribute}`);
    }
    if (inputs.def) {
      filtros.push(`&def=${inputs.def}`);
    }
    if (inputs.level) {
      filtros.push(`&level=${inputs.level}`);
    }
    if (inputs.linkval) {
      filtros.push(`&link=${inputs.linkval}`);
    }
    if (inputs.race) {
      filtros.push(`&race=${inputs.race}`);
    }
    if (inputs.scale) {
      filtros.push(`&scale=${inputs.scale}`);
    }
    if (inputs.type) {
      filtros.push(`&type=${inputs.type}`);
    }
    if (inputs.format) {
      filtros.push(`&format=${inputs.format}`);
    }
  }
  return filtros.join("");
}
