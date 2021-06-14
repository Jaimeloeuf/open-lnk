# open-lnk
Open the source file of .lnk windows shortcut files.  
This is a windows only extension for working with windows .lnk files using a powershell API


## How to use
1. Open a .lnk file, if VS Code prompts you '**The file is not displayed in the editor because it is either binary or uses an unsupported text encoding. Do you want to open it anyway?**', click on open it anyway and follow instructions to open it. If it shows garbled up characters, IT IS OK, DO NOT PANIC.
2. Run the **Open source file of current .lnk file** command from the Command Palette (`Ctrl + Shift + P`) to open the according source file in new tab.
3. You source file should now be opened in a new tab!
<!-- @todo Add a gif showing how it works -->


## Credits, License, Author and Contributing
This project is inspired by <https://github.com/zcfan/vscode-open-symlink-source>.  
This project relies on <https://github.com/felixrieseberg/windows-shortcuts-ps#readme> as the wrapper over the powershell API used for getting source file's path.

This project is developed and made available under the "MIT License". Feel free to use it however you like and contribute changes to build on top of it!  
If you have any questions, contact us via via at [tech@enkeldigital.com](mailto:tech@enkeldigital.com)  
Made by [JJ](https://github.com/Jaimeloeuf)