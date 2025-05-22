import type { Prisma } from '../../../server/database/generated';

export const createSession = async () => {
  const new_session: Prisma.formula_sessionsCreateManyInput = {};
  const session_id =
    await window.formulaSessionsTableApi.insertOne(new_session);
  return session_id;
};

export const createFormula = async () => {
  const new_formula: Prisma.formulasCreateManyInput = {
    session_id: await createSession(),
    latex_code: 'c = \\sqrt{a^2 + b^2}',
    recognized_by: 'SimpleTex',
    created_at: new Date(),
  };
  const formula_id = await window.formulasTableApi.insertOne(new_formula);
  return formula_id;
};

// 获取全部公式，以供加载

// export const getFormulas = (tag_id: string) => {
//   // 获取 对应tag下 的formula ids
//   const tag_formula_ids = FormulaTagsTable.getFormulaIdsByTagId(tag);
//   // 根据 formula ids 获取全部公式传回
//   //   const formulas: Array<formulas> = ;
//   return formulas;
// };

// 对某个公式的名字/进行修改公式

// export const editFormulas = (formula_id: string, new_name: string) => {
//   // 获取 对应 formula
//   const edit_formula = FormulasTable.getUniqueByUuid(formula_id);
//   edit_formula.name = new_name;
//   // 更新公式（Update命令）
//   //   FormulasTable.
//   return;
// };
