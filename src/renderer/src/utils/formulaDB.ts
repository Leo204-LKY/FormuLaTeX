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

// 获取全部公式，以供加载
export const getFormulas = async (tag_id: string) => {
  const formulaIds =
    await window.formulaTagsTableApi.getFormulaIdsByTagId(tag_id);

  if (!formulaIds.length) {
    return [];
  }

  const formulaPromises = formulaIds.map((formulaId: string) => {
    return window.formulasTableApi.getUniqueByUuid(formulaId);
  });

  // 并行执行所有查询，等待结果返回
  const all_formulas = await Promise.all(formulaPromises);

  return all_formulas as formulas[];
};

// 对某个公式的名字/进行修改公式
export const editFormulas = async (formula_id: string, new_name: string) => {
  // 获取 对应 formula
  const edit_formula =
    await window.formulasTableApi.getUniqueByUuid(formula_id);
  edit_formula!.name = new_name;
  // 更新公式（Update命令）
  //   FormulasTable.
  return;
};
