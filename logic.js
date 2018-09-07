const fs = require('fs');
const create = params => {
  // createEntity(params);
  // createPoco(params);
  // createIRepository(params);
  // createDTO(params);
  // createIService(params);
  // createRepository(params);
  // createService(params);
  createController(params);
};

const absolutePath = '/Users/cmarin/Desktop/Proyectos/premex.architecture';

const createEntity = params => {
  const folderPath = `${absolutePath}/App.Model.Def/Entities/${params.schema}/`;

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  fs.readFile('./templates/ModelEntity.txt', 'utf8', function(err, data) {
    if (err) {
      return console.log('No fue posible leer el template ModelEntity: ', err);
    }

    const result = data
      .replace(/{schema}/g, params.schema)
      .replace(/{entity}/g, params.entity);

    fs.writeFile(
      `${folderPath}${params.entity}Entity.cs`,
      result,
      'utf8',
      function(err) {
        if (err) return console.log(err);
      }
    );
  });
};

const createPoco = params => {
  const folderPath = `${absolutePath}/App.Repository.Def/POCOS/${
    params.schema
  }/`;

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  fs.readFile('./templates/RepositoryPoco.txt', 'utf8', function(err, data) {
    if (err) {
      return console.log(
        'No fue posible leer el template RepositoryPoco: ',
        err
      );
    }

    const result = data
      .replace(/{schema}/g, params.schema)
      .replace(/{entity}/g, params.entity);

    fs.writeFile(
      `${folderPath}${params.entity}POCO.cs`,
      result,
      'utf8',
      function(err) {
        if (err) return console.log(err);
      }
    );
  });
};

const createIRepository = params => {
  const folderPath = `${absolutePath}/App.Repository.Def/Definitions/${
    params.schema
  }/`;

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  fs.readFile('./templates/IRepository.txt', 'utf8', function(err, data) {
    if (err) {
      return console.log('No fue posible leer el template IRepository: ', err);
    }

    const result = data
      .replace(/{schema}/g, params.schema)
      .replace(/{entity}/g, params.entity);

    fs.writeFile(
      `${folderPath}I${params.entity}Repository.cs`,
      result,
      'utf8',
      function(err) {
        if (err) return console.log(err);
      }
    );
  });
};

const createDTO = params => {
  const folderPath = `${absolutePath}/App.Domain.Def/DTO/${params.schema}/`;

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  fs.readFile('./templates/DomainDTO.txt', 'utf8', function(err, data) {
    if (err) {
      return console.log('No fue posible leer el template DomainDTO: ', err);
    }

    const result = data
      .replace(/{schema}/g, params.schema)
      .replace(/{entity}/g, params.entity);

    fs.writeFile(
      `${folderPath}${params.entity}DTO.cs`,
      result,
      'utf8',
      function(err) {
        if (err) return console.log(err);
      }
    );
  });
};

const createIService = params => {
  const folderPath = `${absolutePath}/App.Domain.Def/Definitions/${params.schema}/`;

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  fs.readFile('./templates/IService.txt', 'utf8', function(err, data) {
    if (err) {
      return console.log('No fue posible leer el template IService: ', err);
    }

    const result = data
      .replace(/{schema}/g, params.schema)
      .replace(/{entity}/g, params.entity);

    fs.writeFile(
      `${folderPath}I${params.entity}Service.cs`,
      result,
      'utf8',
      function(err) {
        if (err) return console.log(err);
      }
    );
  });
};

const createRepository = params => {
  const folderPath = `${absolutePath}/App.Repository/Implementations/${params.schema}/`;

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  fs.readFile('./templates/Repository.txt', 'utf8', function(err, data) {
    if (err) {
      return console.log('No fue posible leer el template Repository: ', err);
    }

    const result = data
      .replace(/{schema}/g, params.schema)
      .replace(/{entity}/g, params.entity)
      .replace(/{table}/g,params.table);

    fs.writeFile(
      `${folderPath}${params.entity}Repository.cs`,
      result,
      'utf8',
      function(err) {
        if (err) return console.log(err);
      }
    );
  });
};


const createService = params => {
  const folderPath = `${absolutePath}/App.Domain/Implementations/${params.schema}/`;

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  fs.readFile('./templates/Service.txt', 'utf8', function(err, data) {
    if (err) {
      return console.log('No fue posible leer el template Service: ', err);
    }

    const result = data
      .replace(/{schema}/g, params.schema)
      .replace(/{entity}/g, params.entity);

    fs.writeFile(
      `${folderPath}${params.entity}Service.cs`,
      result,
      'utf8',
      function(err) {
        if (err) return console.log(err);
      }
    );
  });
};

const createController = params => {
  const folderPath = `${absolutePath}/Web/App.Api/Controllers/Api/${params.schema}/`;

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  fs.readFile('./templates/Controller.txt', 'utf8', function(err, data) {
    if (err) {
      return console.log('No fue posible leer el template Controller: ', err);
    }

    const result = data
      .replace(/{schema}/g, params.schema)
      .replace(/{entity}/g, params.entity);

    fs.writeFile(
      `${folderPath}${params.entity}Controller.cs`,
      result,
      'utf8',
      function(err) {
        if (err) return console.log(err);
      }
    );
  });
};


module.exports = { create };
