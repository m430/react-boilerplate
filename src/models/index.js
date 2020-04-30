import GlobalModel from './global';

const models = [
  GlobalModel
]

export const initModels = (app) => {
  models.forEach(m => app.model(m));
}