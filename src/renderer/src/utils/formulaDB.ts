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
export const updateFormula = async (
  f_id: string,
  new_name: string,
  new_content: string
) => {
  try {
    const edit_formula: Prisma.formulasUpdateInput = {
      name: new_name,
      latex_code: new_content,
    };
    await window.formulasTableApi.updateUniqueByUuid(f_id, edit_formula);
  } catch (error) {
    console.error('Error editing formula:', error);
    return 0;
  }
  return 1;
};

// Delete a formula by formula_id
export const deleteFormula = async (f_id: string) => {
  try {
    await window.formulasTableApi.deleteUniqueByUuid(f_id);
    console.log('Formula deleted successfully:', f_id);
  } catch (error) {
    console.error('Error deleting formula:', error);
    return 0;
  }
  return 1;
};
