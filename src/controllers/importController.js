import importBigCsvIntoDB from '../services/streamingService.js';

const showImportPage = (req, res) => {
  res.render('import', { title: 'Import CSV', message: null });
};

const doImport = async (req, res) => {
  try {
    await importBigCsvIntoDB();
    res.render('import', { title: 'Import CSV', message: 'Import done!' });
  } catch (err) {
    res.render('import', { title: 'Import CSV', message: 'Error: ' + err.message });
  }
};

export { showImportPage, doImport };