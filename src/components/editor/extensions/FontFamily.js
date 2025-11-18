import { Extension } from "@tiptap/core";

export const FontFamily = Extension.create({
  name: "fontFamily",

  addOptions() {
    return {
      types: ["textStyle"],
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: (element) => {
              const font = element.style.fontFamily;
              return font?.replace(/['"]+/g, "") || null;
            },
            renderHTML: (attributes) => {
              if (!attributes.fontFamily) return {};
              return {
                style: `font-family: ${attributes.fontFamily}`,
              };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setFontFamily:
        (font) =>
        ({ commands }) => {
          return commands.setMark("textStyle", { fontFamily: font });
        },

      unsetFontFamily:
        () =>
        ({ commands }) => {
          return commands.setMark("textStyle", { fontFamily: null });
        },
    };
  },
});
