import { appConst } from "../appConst";

const touchFunction = (a, b) => {
  console.log('il s\'agit de la touche ', a.target.value)
}

const touchSecondaryFunction = (a, b) => {
  console.log('il s\'agit de la fonction secondaire de touche ', a.target.value)
}

export const padBank = [
  {
    key: 'padBankA',
    className: 'pad-bank-a',
    functionName: 'A',
    secondaryName: 'E',
    functionActive: 'primary',
    groupName: 'Pad Bank',
    value: 'A',
    size: appConst[0],
    primaryFunction: touchFunction,
    secondaryFunction: touchSecondaryFunction
  },
  {
    key: 'padBankB',
    className: 'pad-bank-b',
    functionName: 'B',
    secondaryName: 'F',
    functionActive: 'primary',
    groupName: 'Pad Bank',
    value: 'B',
    size: appConst[0],
    primaryFunction: touchFunction,
    secondaryFunction: touchSecondaryFunction
  },
  {
    key: 'padBankC',
    className: 'pad-bank-c',
    functionName: 'C',
    secondaryName: 'G',
    functionActive: 'primary',
    groupName: 'Pad Bank',
    value: 'C',
    size: appConst[0],
    primaryFunction: touchFunction,
    secondaryFunction: touchSecondaryFunction
  },
  {
    key: 'padBankD',
    className: 'pad-bank-d',
    functionName: 'D',
    secondaryName: 'H',
    functionActive: 'primary',
    groupName: 'Pad Bank',
    value: 'D',
    size: appConst[0],
    primaryFunction: touchFunction,
    secondaryFunction: touchSecondaryFunction
  },
  {
    key: 'padBankPadAssign',
    className: 'pad-bank-pad-assign',
    functionName: 'Pad Assign',
    secondaryName: 'Pad Copy',
    functionActive: 'primary',
    groupName: 'Pad Bank',
    value: 'padAssign',
    size: appConst[0],
    primaryFunction: touchFunction,
    secondaryFunction: touchSecondaryFunction
  },
]
