// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary about me.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

export const stackoverflow = async (args: string[]): Promise<string> => {
  window.open(`https://stackoverflow.com/search?q=${args.join(' ')}`);
  return `Searching stack overflow for ${args.join(' ')}...`;
};

// Homelab Pages

export const sonarr = async (args: string[]): Promise<string> => {
  window.open(`https://sonarr.${config.ps1_hostname}/`);
  return 'Opening Sonarr...';
};

export const radarr = async (args: string[]): Promise<string> => {
  window.open(`https://radarr.${config.ps1_hostname}/`);
  return 'Opening Radarr...';
};

export const prowlarr = async (args: string[]): Promise<string> => {
  window.open(`https://prowlarr.${config.ps1_hostname}/`);
  return 'Opening Prowlarr...';
};

export const qbit = async (args: string[]): Promise<string> => {
  window.open(`https://qbit.${config.ps1_hostname}/`);
  return 'Opening QBittorrent...';
};

// Typical linux commands
export const neofetch = async (args: string[]): Promise<string> => {
  var sBrowser, sUsrAg = navigator.userAgent;

  if (sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Chrome";
    return `
             ////////////////                     guest@kuantum.link
           ///////////////////                    ------------------
       ///////////////////////////                Browser: ${sBrowser}
     *//////////////////////////////              User Agent: ${sUsrAg}
   ***/////////////#@%((((((((((((((((            Username: ${config.ps1_username}
  ****////////@@@@/////@@@@((((((((((((           Running on: ${config.ps1_hostname}
 *****//////@@/////////////@@(((((((((((          Shell: bash 5.1.16-pseudo
 *******///@@///////////////@@((((((((((          Terminal: /dev/pts/0
*********/@@@///////////////@@####((((((          
 *********/@@///////////////@@########((          
 ***********@@/////////////@@###########
  ************@@@@/////@@@@*########### 
   ***********************############  
     ********************###########    
       ****************###########      
           ***********########          
    `;
  }
  else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Safari";
    return `
                        ######                    guest@kuantum.link
                      ##%#####                    ------------------
                     #######                      Browser: ${sBrowser}
                    ####%                         User Agent: ${sUsrAg}
        ########%%      ########%##               Username: ${config.ps1_username}
    ####%#######%#######%#######%#####.           Running on: ${config.ps1_hostname}
  ##############%###############%####             Shell: bash 5.1.16-pseudo
 #%#%#%#%#%#%#%#%#%#%#%#%#%#%#%#%#%               Terminal: /dev/pts/0
 ###############%###############%#      
%#######%#######%#######%#######%#      
 ###############%###############%#      
 ###%###%###%###%###%###%###%###%##     
 ###############%###############%####   
  ######%#######%#######%#######%#######
   #############%###############%###### 
     %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  
      ##########%###############%###.   
        ########%#######%#######%#      
    `;
  }
  else if (sUsrAg.indexOf("Opera") > -1) {
    sBrowser = "Opera";
    return `
            *****************                    guest@kuantum.link
           ******************* 				        	 ------------------
       ***********,,,,,,,,,,,,,,,,               Browser: ${sBrowser}
     **********           ,,,,,,,,,,             User Agent: ${sUsrAg}
   **********               ,,,,,,,,,,           Username: ${config.ps1_username}
  **********                  *********          Running on: ${config.ps1_hostname}
 **********                    *********         Shell: bash 5.1.16-pseudo
 *********                     *********	    	 Terminal: /dev/pts/0
**********                     /////////
 *********                     /////////
 **********                    /////////
  **********                  ((((((((( 
   **********               ((((((((((  
     ,,,,,,,,,,           ((((((((((    
       ,,,,,,,,,,,((((((((((((((((      
           ,,,,,,,,,,,,,,,,,,,          
    `;
  }
  else if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Firefox";
    return `
                        &&&&                      guest@kuantum.link
                      &&&&&&&&                    -------------------
       #             &&&&&&&&&&&                  Browser ${sBrowser}
    ####   ##%      %%%&&&&&&&&&&&  &             User Agent: ${sUsrAg}
   ((#######%# **/////////&&&&&&&&&& &&           Username: ${config.ps1_username}
  (((((########%/////////&(/*%%%%&&&&&&&          Running on: ${config.ps1_hostname}
 (((((##%%%%%%####%%&///////&&&%%%%%%&&&          Shell: bash 5.1.16-pseudo
 (((((((#%%%%%%//////////////%%%%%%%%&%&          Terminal: /dev/pts/0
 //((((((((%****////////////*%%%%###%%%%
 *////(((((#******/////////*(###(#%%%%%%
 **///////(((#*************#########%###
   *///////////((*******(((((((#####((# 
    ***///////////////((((((((((((/((   
      ****/////////////////////**//     
         *******/////////*******        
              **************            
    `;
  }
  else if (sUsrAg.indexOf("MSIE") > -1) {
    sBrowser = "IE";
    return `
                             (((((((((((((  		guest@kuantum.link
              (((((((((((((((((       (         -----------------
           (((((((((((((((((((((((    (         Browser: ${sBrowser}
         (((( ((((((((((((((((((((((            User Agent: ${sUsrAg}
       ((  ((((((           ((((((((((          Username: ${config.ps1_username}
      (  (((((((              (((((((((         Running on: ${config.ps1_hostname}
       ((((((((                (((((((((        Shell: bash 5.1.16-pseudo
      ((((((((((((((((((((((((((((((((((        Terminal: /dev/pts/0
    (((((((((((                         
   (((((((((((((                        
  (((  (((((((((((          ((((((((((  
  ((    (((((((((((((((((((((((((((((   
 (((       ((((((((((((((((((((((((     
  ((,        ((((((((((((((((((         
    ((((((                              
    `;
  }
  else {
    sBrowser = "unknown";
    return `
              ##((((////**,                         guest@kuantum.link
        (%#(((((/((////*////*(/*                    ------------------
       &@#%%((#%#(#(/*//(/,/////((*/                Master Chief? Mind telling me what you're doing on the internet?
      %&&#####(((((,....... ,*,,.//#,*, 
     @@(****,,    .,,,,...   .   .   .. 
   (*/%//*.,/*,/*((%&&&@&&%((//*#@/     
   ,(%(/,.,,/..,.*((#((%###/,.,,(&      
   /(%//*,*,*(..,,/(/(####(#/*./*.                  Sir, downloading copyrighted films to enjoy privately.
.,/#%%(/..((%%*/,,*////((((//,*,,.      
.,,/(##( ..//(##%%%&////,/.**,,.,,      
*,*,,*/(,../*/,((((######******.,(      
*/****.,.,,/*.,,,*/((((/,,....,.,. ,,               And just like that, Master Chief, the savior of humanity, was charged
//*/((.  ..    .,,,***///,,,,,...                   with treason and copyright infringement.
*/*(,*.  ..,,*,,..   .// .,., .         
(((/**.. ..*/,,,,,, ,                 . 
    `;
  }
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const exit = async (args: string[]): Promise<string> => {
  if (config.ps1_username === "root") {
    config.ps1_username = "guest";
    return "logout";
  } else {
    window.close();
  }
};

export const hostname = async (args: string[]): Promise<string> => {
  if (config.ps1_username === "root" && args[0] === "-b") {
    config.ps1_hostname = args[1];
    return "hostname set to " + args[1];
  } else if (config.ps1_username === "root" && args[0] === "-t") {
    config.title = args[1];
    return "title set to " + args[1];
  } else {
    return `${config.ps1_hostname}`;
  }
};

export const ps = async (args: string[]): Promise<string> => {
  return `
     PID TTY          TIME CMD
  294936 pts/0    00:00:00 bash
  318821 pts/0    00:00:00 ps
  `;
};

export const ls = async (args: string[]): Promise<string> => {
  return `
a
bunch
of
fake
jailbreak
directories
`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use sublime.`;
};

export const sublime = async (args?: string[]): Promise<string> => {
  return `not sure about that. maybe you should use notepad++? try 'notepadpp'`;
};

export const notepadpp = async (args?: string[]): Promise<string> => {
  return `yikes, too bare bones, maybe you should try atom?`;
};

export const atom = async (args?: string[]): Promise<string> => {
  return `hah! it's dead jim. perhaps we should go back to basics. try 'notepad'.`;
};

export const notepad = async (args?: string[]): Promise<string> => {
  return `alright alright...try 'vscode'`;
};

export const vscode = async (args?: string[]): Promise<string> => {
  window.open(`vscode://`);
  return `opening god's favorite editor...`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  if (args.length > 0 && args[0] === 'jailbreak') {
    config.ps1_username = 'root';
    return `jailbreak successful.`;
  } else {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
    return `Permission denied: with little power comes... no responsibility? `;
  }
  
};

// Banner
export const banner = (args?: string[]): string => {
  return `
██╗  ██╗██╗   ██╗ █████╗ ███╗   ██╗████████╗██╗   ██╗███╗   ███╗███████╗    ██╗     ██╗███╗   ██╗██╗  ██╗
██║ ██╔╝██║   ██║██╔══██╗████╗  ██║╚══██╔══╝██║   ██║████╗ ████║██╔════╝    ██║     ██║████╗  ██║██║ ██╔╝
█████╔╝ ██║   ██║███████║██╔██╗ ██║   ██║   ██║   ██║██╔████╔██║███████╗    ██║     ██║██╔██╗ ██║█████╔╝ 
██╔═██╗ ██║   ██║██╔══██║██║╚██╗██║   ██║   ██║   ██║██║╚██╔╝██║╚════██║    ██║     ██║██║╚██╗██║██╔═██╗ 
██║  ██╗╚██████╔╝██║  ██║██║ ╚████║   ██║   ╚██████╔╝██║ ╚═╝ ██║███████║    ███████╗██║██║ ╚████║██║  ██╗
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝╚══════╝    ╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
