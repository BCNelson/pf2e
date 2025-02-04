import { ItemSheetPF2e } from "@item/sheet/base";
import { ItemSheetDataPF2e } from "@item/sheet/data-types";
import { createSheetOptions, SheetOptions } from "@module/sheet/helpers";
import { MeleePF2e } from ".";

export class MeleeSheetPF2e extends ItemSheetPF2e<MeleePF2e> {
    override async getData(): Promise<MeleeSheetData> {
        const item = this.item;
        const baseData = await super.getData();
        return {
            ...baseData,
            damageTypes: CONFIG.PF2E.damageTypes,
            attackEffects: createSheetOptions(this.getAttackEffectOptions(), item.system.attackEffects),
        };
    }
}

interface MeleeSheetData extends ItemSheetDataPF2e<MeleePF2e> {
    damageTypes: ConfigPF2e["PF2E"]["damageTypes"];
    attackEffects: SheetOptions;
}
