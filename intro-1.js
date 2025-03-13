 // Globals since there are no windows because there is no browser

    // __dirname - path to current directory
    // __filename - file name
    // require - function to use modules (CommonJS)
    // module - info about current module (file)
    // process - info about env where the program is being executed
    // console - object to log output to the console

    import { fileURLToPath } from 'url';
    import { dirname } from 'path';
    
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    
    console.log(__dirname);