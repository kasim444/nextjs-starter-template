module.exports = function (plop) {
    // controller generator
    plop.setGenerator("component", {
        description: "react component",
        prompts: [
            {
                type: "list",
                name: "type",
                message: "Component Type",
                choices: [
                    "elements",
                    "sections",
                    "templates",
                    "forms",
                    "common",
                    "icons",
                ],
            },
            {
                type: "input",
                name: "name",
                message: "Component Name",
            },
        ],
        actions: function (data) {
            var actions = [
                {
                    type: "append",
                    path: `../src/components/${data.type}/index.ts`,
                    templateFile: "templates/import.ts.hbs",
                },
            ];

            if (
                data.type === "common" ||
                data.type === "sections" ||
                data.type === "templates" ||
                data.type === "elements" ||
                data.type === "forms"
            ) {
                actions.push(
                    {
                        type: "add",
                        path: `../src/components/${data.type}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
                        templateFile: "templates/common-ui/component.tsx.hbs",
                    },
                    {
                        type: "add",
                        path: `../src/components/${data.type}/{{pascalCase name}}/index.ts`,
                        templateFile: "templates/common-ui/index.ts.hbs",
                    },
                    {
                        type: "add",
                        path: `../src/components/${data.type}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx`,
                        templateFile: "templates/common-ui/stories.tsx.hbs",
                    },
                    {
                        type: "add",
                        path: `../src/interfaces/I{{pascalCase name}}.ts`,
                        templateFile: "templates/common-ui/interface.ts.hbs",
                    },
                    {
                        type: "append",
                        path: `../src/interfaces/index.ts`,
                        templateFile:
                            "templates/common-ui/interface-index.ts.hbs",
                    },
                );
            }

            if (data.type === "icons") {
                actions.push({
                    type: "add",
                    path: `../src/components/${data.type}/{{pascalCase name}}.tsx`,
                    templateFile: "templates/icons/icons.tsx.hbs",
                });
            }

            return actions;
        },
    });
};
