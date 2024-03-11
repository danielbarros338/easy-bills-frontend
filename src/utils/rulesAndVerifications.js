export const inputRules = {
  name: (name) => {
    if (!name) return 'O campo "Nome" não pode estar vazio';
    if (name.length < 10)
      return 'O campo "Nome" deve ter no mínimo 10 caracteres';
    if (/[<>\|\\\/=&]/gi.test(name))
      return 'Você utilizou caracteres proibidos no campo "Nome"';

    return true;
  },
  email: (email) => {
    if (!email) return 'O campo "Email" não pode estar vazio';
    if (email.length < 7)
      return 'O campo "Email" deve ter no mínimo 7 caracteres';
    if (/[<>\|\\\/=&]/gi.test(email))
      return 'Você utilizou caracteres proibidos no campo "Email"';

    return true;
  },
  password: (password) => {
    if (!password) return 'O campo "Senha" não pode estar vazio';
    if (password.length < 8)
      return 'O campo "Senha" deve ter no mínimo 8 caracteres';
    if (/[<>\|\\\/=&]/gi.test(password))
      return 'Você utilizou caracteres proibidos no campo "Email"';
    if (!/[!.,@#$%¨&*\(\)\\\-+_\{\}\[\]`\^~:;\/\?ºª¬\'\"]/g.test(password))
      return "Você deve utilizar ao menos 1 caractere especial na sua senha";
    if (!/[0-9]/g.test(password)) return "Use ao menos 1 número da sua senha";
    if (!/[a-z]/g.test(password)) return "Use ao menos 1 letra na sua senha";
    if (!/[A-Z]/g.test(password))
      return "Use ao menos 1 letra maiúscula na sua senha";

    return true;
  },
  confirmPass: (confPass) =>
    confPass !== user.value.password ? "As senhas não conferem" : true,
};
