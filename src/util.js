export function deFormatTitle(title) {
    return title.replace("(dot)", ".")
    .replace("(pc)", "%")
    .replace("(plus)", "+")
    .replace("(colon)", ":")
    .replace("(hash)", "#")
    .replace("(quest)", "?")
    .replace("(comma)", ",")
    .replace("(USD)", "$")
}