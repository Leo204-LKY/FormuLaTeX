import type { formulas, Prisma } from '@prisma/client';

export const createFormula = async (
  tag_id: string,
  formula_name: string,
  formula_content: string
) => {
  const new_formula: Prisma.formulasCreateManyInput = {
    latex_code: formula_content,
    recognized_by: 'SimpleTex' + tag_id,
    name: formula_name,
    created_at: new Date(),
  };
  const formula_id = await window.formulasTableApi.insertOne(new_formula);
  await window.formulaTagsTableApi.addTagToFormula(formula_id, tag_id);
  return formula_id;
};

// Get all formulas by tag_id
export const getFormulas = async (tag_id: string) => {
  const formulaIds =
    await window.formulaTagsTableApi.getFormulaIdsByTagId(tag_id);

  if (!formulaIds.length) {
    return [];
  }

  const formulaPromises = formulaIds.map((formulaId: string) => {
    return window.formulasTableApi.getUniqueByUuid(formulaId);
  });

  const all_formulas = await Promise.all(formulaPromises);

  return all_formulas as formulas[];
};

// Ediit a formula by formula_id
export const editFormulas = async (formula_id: string, new_name: string) => {
  // 获取 对应 formula
  const edit_formula =
    await window.formulasTableApi.getUniqueByUuid(formula_id);
  edit_formula!.name = new_name;
  //   FormulasTable.
  return;
};
