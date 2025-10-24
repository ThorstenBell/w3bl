import en from "../i18n/en.json";
import nl from "../i18n/nl.json";

export function getI18nStaticPaths() {
    return [
        {params: {lang: "en"}},
        {params: {lang: "nl"}},
    ];
}

const DICTS = { en, nl };

export function $t(key, lang) {
    const l = (lang || "en").toLowerCase();
    const dict = DICTS[l] || DICTS.en;
    const value = dict && Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : undefined;
    return typeof value === "string" && value.length > 0 ? value : key;
}
