 let data = [
    {
        id: 1,
        title: 'No require',
        subtitle: '',
        description: 'Para tu servicio no necesitas ninguno en especial.',
        selection: false,
        image: '<svg version="1.1" id="Capa_1" class="special-icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 368 368" style="enable-background:new 0 0 368 368;" xml:space="preserve"><g><g><path d="M184,0C82.544,0,0,82.536,0,184s82.544,184,184,184c101.464,0,184-82.536,184-184S285.464,0,184,0z M184,352 c-92.64,0-168-75.368-168-168S91.36,16,184,16c92.632,0,168,75.368,168,168S276.632,352,184,352z"/></g></g><g><g><path d="M289.6,126.912c-0.192-0.36-0.512-0.592-0.752-0.912c-0.232-0.304-0.344-0.664-0.624-0.944 c-0.104-0.104-0.248-0.136-0.352-0.232c-0.192-0.168-0.368-0.344-0.568-0.496c-0.256-0.192-0.56-0.28-0.832-0.44 c0,0-0.008,0-0.008-0.008c-0.416-0.24-0.8-0.496-1.248-0.656c-0.336-0.12-0.68-0.176-1.032-0.248 c-0.16-0.032-0.288-0.152-0.456-0.176c-0.168-0.024-0.32,0.056-0.488,0.04c-0.352-0.032-0.68-0.072-1.032-0.056 c-0.488,0.024-0.96,0.168-1.448,0.28c-0.296,0.072-0.584,0.064-0.872,0.168c-0.24,0.088-0.464,0.2-0.696,0.312 c-0.136,0.064-0.288,0.056-0.424,0.128c-0.36,0.192-0.584,0.512-0.904,0.752c-0.312,0.232-0.672,0.352-0.952,0.632l-151.84,151.84 c-0.28,0.28-0.4,0.64-0.632,0.944c-0.24,0.32-0.56,0.544-0.752,0.904c-0.072,0.136-0.064,0.288-0.128,0.424 c-0.104,0.224-0.216,0.432-0.304,0.664c-0.112,0.312-0.112,0.624-0.184,0.944c-0.104,0.472-0.248,0.92-0.264,1.392 c-0.016,0.352,0.024,0.688,0.056,1.04c0.016,0.168-0.064,0.328-0.04,0.496c0.024,0.168,0.152,0.296,0.184,0.464 c0.072,0.344,0.128,0.672,0.24,1c0.16,0.448,0.416,0.848,0.656,1.264c0.16,0.288,0.256,0.592,0.448,0.848 c0.144,0.2,0.312,0.368,0.48,0.552c0.104,0.112,0.136,0.256,0.24,0.368c0.288,0.288,0.648,0.408,0.968,0.64 c0.312,0.232,0.536,0.552,0.888,0.744C144.36,299.024,164.096,304,184,304c66.168,0,120-53.832,120-120 C304,164.104,299.024,144.36,289.6,126.912z M184,288c-3.928,0-7.832-0.288-11.72-0.728c-1.216-0.136-2.424-0.352-3.64-0.536 c-2.712-0.4-5.4-0.896-8.064-1.512c-1.32-0.304-2.632-0.624-3.944-0.976c-2.72-0.736-5.4-1.608-8.048-2.568 c-1.056-0.376-2.128-0.704-3.168-1.12c-0.32-0.128-0.624-0.304-0.944-0.44L280.12,144.472c0.136,0.328,0.32,0.64,0.448,0.968 c0.4,1.008,0.72,2.056,1.088,3.072c0.968,2.68,1.848,5.392,2.6,8.144c0.352,1.288,0.664,2.584,0.968,3.888 c0.616,2.68,1.12,5.392,1.52,8.112c0.176,1.2,0.392,2.392,0.528,3.6C287.712,176.16,288,180.072,288,184 C288,241.344,241.344,288,184,288z"/></g></g><g><g><path d="M245.152,84.784c-0.016-0.168,0.064-0.328,0.04-0.496c-0.024-0.168-0.144-0.296-0.184-0.456 c-0.072-0.344-0.128-0.68-0.24-1.016c-0.16-0.448-0.424-0.84-0.664-1.264c-0.16-0.28-0.248-0.584-0.44-0.84 c-0.152-0.2-0.32-0.376-0.488-0.56c-0.096-0.112-0.136-0.256-0.24-0.36c-0.28-0.28-0.64-0.4-0.952-0.632 c-0.32-0.24-0.544-0.56-0.904-0.752C223.64,68.976,203.896,64,184,64c-66.168,0-120,53.832-120,120 c0,19.904,4.984,39.648,14.4,57.088c0.376,0.688,0.84,1.296,1.368,1.832c0.008,0.008,0.008,0.016,0.016,0.024 c0.024,0.024,0.064,0.032,0.088,0.064c0.232,0.224,0.504,0.4,0.76,0.592c0.144,0.112,0.264,0.224,0.416,0.32 c0.344,0.224,0.696,0.4,1.064,0.576c0.224,0.104,0.432,0.192,0.656,0.272c0.408,0.144,0.816,0.248,1.248,0.328 c0.096,0.016,0.168,0.088,0.264,0.104c0.384,0.056,0.776,0.088,1.16,0.088c0,0,0,0,0.008,0c0.896,0,1.784-0.208,2.664-0.52 c0.12-0.04,0.248-0.032,0.368-0.08c0.088-0.032,0.152-0.112,0.24-0.152c0.176-0.08,0.36-0.112,0.536-0.208 c0.352-0.192,0.576-0.504,0.888-0.744c0.312-0.232,0.68-0.36,0.96-0.64L242.936,91.096c0.28-0.28,0.4-0.64,0.632-0.952 c0.24-0.312,0.56-0.544,0.752-0.896c0.072-0.136,0.064-0.288,0.128-0.424c0.104-0.224,0.216-0.432,0.304-0.664 c0.112-0.304,0.112-0.624,0.184-0.944c0.112-0.472,0.248-0.928,0.272-1.4C245.224,85.464,245.184,85.136,245.152,84.784z M87.88,223.528c-0.136-0.328-0.32-0.64-0.448-0.968c-0.4-1-0.712-2.024-1.072-3.032c-0.976-2.696-1.864-5.432-2.616-8.2 c-0.344-1.272-0.656-2.544-0.952-3.832c-0.624-2.704-1.128-5.432-1.536-8.184c-0.176-1.184-0.392-2.36-0.52-3.552 C80.288,191.856,80,187.936,80,184c0-57.344,46.656-104,104-104c3.928,0,7.84,0.288,11.728,0.728c1.208,0.136,2.4,0.352,3.6,0.528 c2.728,0.408,5.432,0.904,8.112,1.52c1.304,0.304,2.6,0.616,3.888,0.968c2.752,0.744,5.464,1.624,8.144,2.6 c1.024,0.368,2.064,0.688,3.072,1.088c0.328,0.128,0.64,0.312,0.968,0.448L87.88,223.528z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'
    },
    {
        id: 2,
        title: 'Sobre',
        subtitle: '(Carta u Oficio)',
        description: 'Si necesitas enviar documentos, esta es tu mejor opcion.',
        selection: true,
        image: '<svg id="Capa_1" class="special-icons" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path  d="m42.03 0v512h427.939v-512zm198.97 105c0-8.271 6.729-15 15-15s15 6.729 15 15-6.729 15-15 15-15-6.729-15-15zm30 42.419c17.459-6.192 30-22.865 30-42.42 0-24.813-20.187-45-45-45s-45 20.187-45 45c0 19.555 12.541 36.228 30 42.42v32.581h-97.639l-63.054-150h351.385l-63.054 150h-97.638zm-198.97-59.693 51.399 122.274h117.571v32.58c-17.459 6.192-30 22.865-30 42.42 0 24.813 20.187 45 45 45s45-20.187 45-45c0-19.555-12.541-36.228-30-42.42v-32.58h117.57l51.399-122.274v251.293c-.467-.004-.933-.019-1.399-.019-79.192 0-143.704 64.005-144.55 143h-221.99zm198.97 197.274c0 8.271-6.729 15-15 15s-15-6.729-15-15 6.729-15 15-15 15 6.729 15 15zm53.02 197c.844-62.453 51.901-113 114.55-113 .467 0 .933.013 1.399.019v112.981z"/></svg>'
    },
    {
        id: 3,
        title: 'Maleta',
        subtitle: '(40x38x38 cms)',
        description: 'Ideal para productos que no superen los 38 cms.',
        selection: false,
        image: '<svg class="special-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><g id="Outline"><path d="M98.147,372.8l6.138,14.777a65.794,65.794,0,0,1,13.45-3.962l-2.861-15.742A81.91,81.91,0,0,0,98.147,372.8Z"/><path d="M56.122,412.513l14.4,6.974a65.626,65.626,0,0,1,21.993-25.533l-9.03-13.209A81.646,81.646,0,0,0,56.122,412.513Z"/><path d="M496,408a55.9,55.9,0,0,0-14.262-37.335l-11.922,10.67A39.906,39.906,0,0,1,479.2,400H424a8,8,0,0,0-6.656,3.562L387.719,448H368V424a56.064,56.064,0,0,1,56-56h16a39.8,39.8,0,0,1,22.112,6.662l8.86-13.324A55.661,55.661,0,0,0,448,352.572V328a8,8,0,0,0-8-8,32.036,32.036,0,0,1-32-32V256h24a8,8,0,0,0,8-8V192a8,8,0,0,0-8-8H417.89a36.961,36.961,0,0,0-9.89,1.363V176a8,8,0,0,0-1.753-5L380.072,138.28a28,28,0,1,0-11.789,10.876L392,178.806V188.9l-35.17-11.723A21.563,21.563,0,0,0,349.667,176H283.68L245.7,131.689A23.985,23.985,0,0,0,256,112v-3.056l11.578-5.789a8,8,0,0,0,3.078-11.593l-13.14-19.71A8,8,0,0,0,264,64a48.055,48.055,0,0,0-48-48c-15.065,0-29.015,4.327-39.39,15.792a48.089,48.089,0,0,0-12.173,36.984l1.712,17.112A28.913,28.913,0,0,0,176,104.938V256a31.793,31.793,0,0,0,4.305,16H168a23.885,23.885,0,0,0-8,1.376V168a24.027,24.027,0,0,0-24-24H40a24.027,24.027,0,0,0-24,24v40H32V192H144v80H32V224H16v65.323a15.991,15.991,0,0,0,13.138,15.742L104,318.677V337.45A113.28,113.28,0,0,0,84.214,344H40a8,8,0,0,0-8,8v37.972A113.628,113.628,0,0,0,16,448a8,8,0,0,0,8,8H60.671a64,64,0,0,0,118.658,0H313.84a40.063,40.063,0,0,0,29.6-13.09l8.56-9.419V456a8,8,0,0,0,8,8h16.576A64,64,0,0,0,496,432a63.72,63.72,0,0,0-2.606-18.1A7.97,7.97,0,0,0,496,408ZM344,124a12,12,0,1,1,12,12A12.013,12.013,0,0,1,344,124ZM229.55,408A29.584,29.584,0,0,1,200,378.449c0-7.854,1.986-15.2,7.22-21.243a29.634,29.634,0,0,1,18.147-9.9A35.674,35.674,0,0,0,256,312a7.975,7.975,0,0,0-2.345-5.659A23.961,23.961,0,0,0,254.624,288h21.728l-35.106,91.274A18.58,18.58,0,0,0,240,386.167V408ZM256,392h40a8,8,0,0,1,4.437,14.652A16.023,16.023,0,0,1,294.06,408H256Zm62.082-1.4a24.071,24.071,0,0,0-18.226-14.29l33.131-79.763A46.653,46.653,0,0,0,289.9,232H256V219.314l2.343,2.343A8,8,0,0,0,264,224h81.376A23.992,23.992,0,0,0,368,256h.022A39.788,39.788,0,0,0,360,280v62.06a16.108,16.108,0,0,1-4.687,11.313ZM368,240a8,8,0,1,1,8-8A8.009,8.009,0,0,1,368,240Zm56-40v40H408V202.491A21.035,21.035,0,0,1,417.89,200Zm-32,32a23.992,23.992,0,0,0-32-22.624V195.1l32,10.666ZM280,192h64v16H267.314l-45.657-45.657-11.314,11.314L240,203.313V232H192V136h36.32l45.606,53.207A8,8,0,0,0,280,192ZM188.473,42.528C195.786,34.447,205.491,32,216,32a32.058,32.058,0,0,1,30.988,24H216a8,8,0,0,0-8,8V83A13,13,0,0,1,182.07,84.3l-1.712-17.112A31.631,31.631,0,0,1,188.473,42.528ZM195,112a29.03,29.03,0,0,0,29-29V72h16a7.993,7.993,0,0,0,1.344,4.438L252.317,92.9l-7.9,3.948A8,8,0,0,0,240,104v8a8.009,8.009,0,0,1-8,8H192v-8.157A29.5,29.5,0,0,0,195,112Zm-3,144v-8h97.9a30.655,30.655,0,0,1,28.309,42.414L282.66,376H259.648l35.819-93.128A8,8,0,0,0,288,272H208A16.019,16.019,0,0,1,192,256Zm-24,32h64a8,8,0,0,1,0,16H168a8,8,0,0,1,0-16ZM32,176v-8a8.009,8.009,0,0,1,8-8h96a8.009,8.009,0,0,1,8,8v8Zm0,112H144v16H112.721L32,289.323Zm25.89,72A113.209,113.209,0,0,0,48,369.052V360ZM120,480a48.355,48.355,0,0,1-41.558-24H98.854a31.947,31.947,0,0,0,42.292,0h20.412A48.355,48.355,0,0,1,120,480Zm211.6-47.85A24.036,24.036,0,0,1,313.84,440H32.331a97.44,97.44,0,0,1,76.875-87.316A29.964,29.964,0,0,1,115.5,352H168V336H120V320H238.3a19.678,19.678,0,0,1-15.2,11.472,45.657,45.657,0,0,0-27.97,15.252C187.389,355.638,184,366.79,184,378.45A45.338,45.338,0,0,0,194.928,408H128v16H294.06a32.578,32.578,0,0,0,22.627-9.373l49.94-49.94A32.226,32.226,0,0,0,376,342.06V280a24.042,24.042,0,0,1,16-22.629V288a48.078,48.078,0,0,0,40,47.333V352c-4.967,0-10.049-.3-14.987.345A72.15,72.15,0,0,0,353.906,407.6ZM428.281,416h.406l9.656,9.657A9.012,9.012,0,0,1,440.97,432a8.97,8.97,0,0,1-15.313,6.343l-7.363-7.362ZM432,480a48.268,48.268,0,0,1-36.475-16.832,7.981,7.981,0,0,0,3.131-2.73l6.936-10.4A31.983,31.983,0,0,0,464,432a31.586,31.586,0,0,0-3.089-13.7c-.373-.787-.784-1.549-1.217-2.3h17.571A48.025,48.025,0,0,1,432,480Z"/><rect x="48" y="208" width="16" height="48"/></g></svg>'
    },
    {
        id: 4,
        title: "Baul o maletero",
        subtitle: "(30x30x30 cms)",
        description: "Ideal para paquetes pequenos como una caja de zapatos.",
        selection: false,
        image: '<svg class="special-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><g id="Outline"><path d="M98.147,372.8l6.138,14.777a65.794,65.794,0,0,1,13.45-3.962l-2.861-15.742A81.91,81.91,0,0,0,98.147,372.8Z"/><path d="M56.122,412.513l14.4,6.974a65.626,65.626,0,0,1,21.993-25.533l-9.03-13.209A81.646,81.646,0,0,0,56.122,412.513Z"/><path d="M496,408a55.9,55.9,0,0,0-14.262-37.335l-11.922,10.67A39.906,39.906,0,0,1,479.2,400H424a8,8,0,0,0-6.656,3.562L387.719,448H368V424a56.064,56.064,0,0,1,56-56h16a39.8,39.8,0,0,1,22.112,6.662l8.86-13.324A55.661,55.661,0,0,0,448,352.572V328a8,8,0,0,0-8-8,32.036,32.036,0,0,1-32-32V256h24a8,8,0,0,0,8-8V192a8,8,0,0,0-8-8H417.89a36.961,36.961,0,0,0-9.89,1.363V176a8,8,0,0,0-1.753-5L380.072,138.28a28,28,0,1,0-11.789,10.876L392,178.806V188.9l-35.17-11.723A21.563,21.563,0,0,0,349.667,176H283.68L245.7,131.689A23.985,23.985,0,0,0,256,112v-3.056l11.578-5.789a8,8,0,0,0,3.078-11.593l-13.14-19.71A8,8,0,0,0,264,64a48.055,48.055,0,0,0-48-48c-15.065,0-29.015,4.327-39.39,15.792a48.089,48.089,0,0,0-12.173,36.984l1.712,17.112A28.913,28.913,0,0,0,176,104.938V256a31.793,31.793,0,0,0,4.305,16H168a23.885,23.885,0,0,0-8,1.376V168a24.027,24.027,0,0,0-24-24H40a24.027,24.027,0,0,0-24,24v40H32V192H144v80H32V224H16v65.323a15.991,15.991,0,0,0,13.138,15.742L104,318.677V337.45A113.28,113.28,0,0,0,84.214,344H40a8,8,0,0,0-8,8v37.972A113.628,113.628,0,0,0,16,448a8,8,0,0,0,8,8H60.671a64,64,0,0,0,118.658,0H313.84a40.063,40.063,0,0,0,29.6-13.09l8.56-9.419V456a8,8,0,0,0,8,8h16.576A64,64,0,0,0,496,432a63.72,63.72,0,0,0-2.606-18.1A7.97,7.97,0,0,0,496,408ZM344,124a12,12,0,1,1,12,12A12.013,12.013,0,0,1,344,124ZM229.55,408A29.584,29.584,0,0,1,200,378.449c0-7.854,1.986-15.2,7.22-21.243a29.634,29.634,0,0,1,18.147-9.9A35.674,35.674,0,0,0,256,312a7.975,7.975,0,0,0-2.345-5.659A23.961,23.961,0,0,0,254.624,288h21.728l-35.106,91.274A18.58,18.58,0,0,0,240,386.167V408ZM256,392h40a8,8,0,0,1,4.437,14.652A16.023,16.023,0,0,1,294.06,408H256Zm62.082-1.4a24.071,24.071,0,0,0-18.226-14.29l33.131-79.763A46.653,46.653,0,0,0,289.9,232H256V219.314l2.343,2.343A8,8,0,0,0,264,224h81.376A23.992,23.992,0,0,0,368,256h.022A39.788,39.788,0,0,0,360,280v62.06a16.108,16.108,0,0,1-4.687,11.313ZM368,240a8,8,0,1,1,8-8A8.009,8.009,0,0,1,368,240Zm56-40v40H408V202.491A21.035,21.035,0,0,1,417.89,200Zm-32,32a23.992,23.992,0,0,0-32-22.624V195.1l32,10.666ZM280,192h64v16H267.314l-45.657-45.657-11.314,11.314L240,203.313V232H192V136h36.32l45.606,53.207A8,8,0,0,0,280,192ZM188.473,42.528C195.786,34.447,205.491,32,216,32a32.058,32.058,0,0,1,30.988,24H216a8,8,0,0,0-8,8V83A13,13,0,0,1,182.07,84.3l-1.712-17.112A31.631,31.631,0,0,1,188.473,42.528ZM195,112a29.03,29.03,0,0,0,29-29V72h16a7.993,7.993,0,0,0,1.344,4.438L252.317,92.9l-7.9,3.948A8,8,0,0,0,240,104v8a8.009,8.009,0,0,1-8,8H192v-8.157A29.5,29.5,0,0,0,195,112Zm-3,144v-8h97.9a30.655,30.655,0,0,1,28.309,42.414L282.66,376H259.648l35.819-93.128A8,8,0,0,0,288,272H208A16.019,16.019,0,0,1,192,256Zm-24,32h64a8,8,0,0,1,0,16H168a8,8,0,0,1,0-16ZM32,176v-8a8.009,8.009,0,0,1,8-8h96a8.009,8.009,0,0,1,8,8v8Zm0,112H144v16H112.721L32,289.323Zm25.89,72A113.209,113.209,0,0,0,48,369.052V360ZM120,480a48.355,48.355,0,0,1-41.558-24H98.854a31.947,31.947,0,0,0,42.292,0h20.412A48.355,48.355,0,0,1,120,480Zm211.6-47.85A24.036,24.036,0,0,1,313.84,440H32.331a97.44,97.44,0,0,1,76.875-87.316A29.964,29.964,0,0,1,115.5,352H168V336H120V320H238.3a19.678,19.678,0,0,1-15.2,11.472,45.657,45.657,0,0,0-27.97,15.252C187.389,355.638,184,366.79,184,378.45A45.338,45.338,0,0,0,194.928,408H128v16H294.06a32.578,32.578,0,0,0,22.627-9.373l49.94-49.94A32.226,32.226,0,0,0,376,342.06V280a24.042,24.042,0,0,1,16-22.629V288a48.078,48.078,0,0,0,40,47.333V352c-4.967,0-10.049-.3-14.987.345A72.15,72.15,0,0,0,353.906,407.6ZM428.281,416h.406l9.656,9.657A9.012,9.012,0,0,1,440.97,432a8.97,8.97,0,0,1-15.313,6.343l-7.363-7.362ZM432,480a48.268,48.268,0,0,1-36.475-16.832,7.981,7.981,0,0,0,3.131-2.73l6.936-10.4A31.983,31.983,0,0,0,464,432a31.586,31.586,0,0,0-3.089-13.7c-.373-.787-.784-1.549-1.217-2.3h17.571A48.025,48.025,0,0,1,432,480Z"/><rect x="48" y="208" width="16" height="48"/></g></svg>'
    },
    {
        id: 5,
        title: "Parrilla",
        description: "Ideal si necesitas llevar paquetes de hasta 50x50x50cms.",
        selection: false,
        image: '<svg class="special-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><g id="Outline"><path d="M98.147,372.8l6.138,14.777a65.794,65.794,0,0,1,13.45-3.962l-2.861-15.742A81.91,81.91,0,0,0,98.147,372.8Z"/><path d="M56.122,412.513l14.4,6.974a65.626,65.626,0,0,1,21.993-25.533l-9.03-13.209A81.646,81.646,0,0,0,56.122,412.513Z"/><path d="M496,408a55.9,55.9,0,0,0-14.262-37.335l-11.922,10.67A39.906,39.906,0,0,1,479.2,400H424a8,8,0,0,0-6.656,3.562L387.719,448H368V424a56.064,56.064,0,0,1,56-56h16a39.8,39.8,0,0,1,22.112,6.662l8.86-13.324A55.661,55.661,0,0,0,448,352.572V328a8,8,0,0,0-8-8,32.036,32.036,0,0,1-32-32V256h24a8,8,0,0,0,8-8V192a8,8,0,0,0-8-8H417.89a36.961,36.961,0,0,0-9.89,1.363V176a8,8,0,0,0-1.753-5L380.072,138.28a28,28,0,1,0-11.789,10.876L392,178.806V188.9l-35.17-11.723A21.563,21.563,0,0,0,349.667,176H283.68L245.7,131.689A23.985,23.985,0,0,0,256,112v-3.056l11.578-5.789a8,8,0,0,0,3.078-11.593l-13.14-19.71A8,8,0,0,0,264,64a48.055,48.055,0,0,0-48-48c-15.065,0-29.015,4.327-39.39,15.792a48.089,48.089,0,0,0-12.173,36.984l1.712,17.112A28.913,28.913,0,0,0,176,104.938V256a31.793,31.793,0,0,0,4.305,16H168a23.885,23.885,0,0,0-8,1.376V168a24.027,24.027,0,0,0-24-24H40a24.027,24.027,0,0,0-24,24v40H32V192H144v80H32V224H16v65.323a15.991,15.991,0,0,0,13.138,15.742L104,318.677V337.45A113.28,113.28,0,0,0,84.214,344H40a8,8,0,0,0-8,8v37.972A113.628,113.628,0,0,0,16,448a8,8,0,0,0,8,8H60.671a64,64,0,0,0,118.658,0H313.84a40.063,40.063,0,0,0,29.6-13.09l8.56-9.419V456a8,8,0,0,0,8,8h16.576A64,64,0,0,0,496,432a63.72,63.72,0,0,0-2.606-18.1A7.97,7.97,0,0,0,496,408ZM344,124a12,12,0,1,1,12,12A12.013,12.013,0,0,1,344,124ZM229.55,408A29.584,29.584,0,0,1,200,378.449c0-7.854,1.986-15.2,7.22-21.243a29.634,29.634,0,0,1,18.147-9.9A35.674,35.674,0,0,0,256,312a7.975,7.975,0,0,0-2.345-5.659A23.961,23.961,0,0,0,254.624,288h21.728l-35.106,91.274A18.58,18.58,0,0,0,240,386.167V408ZM256,392h40a8,8,0,0,1,4.437,14.652A16.023,16.023,0,0,1,294.06,408H256Zm62.082-1.4a24.071,24.071,0,0,0-18.226-14.29l33.131-79.763A46.653,46.653,0,0,0,289.9,232H256V219.314l2.343,2.343A8,8,0,0,0,264,224h81.376A23.992,23.992,0,0,0,368,256h.022A39.788,39.788,0,0,0,360,280v62.06a16.108,16.108,0,0,1-4.687,11.313ZM368,240a8,8,0,1,1,8-8A8.009,8.009,0,0,1,368,240Zm56-40v40H408V202.491A21.035,21.035,0,0,1,417.89,200Zm-32,32a23.992,23.992,0,0,0-32-22.624V195.1l32,10.666ZM280,192h64v16H267.314l-45.657-45.657-11.314,11.314L240,203.313V232H192V136h36.32l45.606,53.207A8,8,0,0,0,280,192ZM188.473,42.528C195.786,34.447,205.491,32,216,32a32.058,32.058,0,0,1,30.988,24H216a8,8,0,0,0-8,8V83A13,13,0,0,1,182.07,84.3l-1.712-17.112A31.631,31.631,0,0,1,188.473,42.528ZM195,112a29.03,29.03,0,0,0,29-29V72h16a7.993,7.993,0,0,0,1.344,4.438L252.317,92.9l-7.9,3.948A8,8,0,0,0,240,104v8a8.009,8.009,0,0,1-8,8H192v-8.157A29.5,29.5,0,0,0,195,112Zm-3,144v-8h97.9a30.655,30.655,0,0,1,28.309,42.414L282.66,376H259.648l35.819-93.128A8,8,0,0,0,288,272H208A16.019,16.019,0,0,1,192,256Zm-24,32h64a8,8,0,0,1,0,16H168a8,8,0,0,1,0-16ZM32,176v-8a8.009,8.009,0,0,1,8-8h96a8.009,8.009,0,0,1,8,8v8Zm0,112H144v16H112.721L32,289.323Zm25.89,72A113.209,113.209,0,0,0,48,369.052V360ZM120,480a48.355,48.355,0,0,1-41.558-24H98.854a31.947,31.947,0,0,0,42.292,0h20.412A48.355,48.355,0,0,1,120,480Zm211.6-47.85A24.036,24.036,0,0,1,313.84,440H32.331a97.44,97.44,0,0,1,76.875-87.316A29.964,29.964,0,0,1,115.5,352H168V336H120V320H238.3a19.678,19.678,0,0,1-15.2,11.472,45.657,45.657,0,0,0-27.97,15.252C187.389,355.638,184,366.79,184,378.45A45.338,45.338,0,0,0,194.928,408H128v16H294.06a32.578,32.578,0,0,0,22.627-9.373l49.94-49.94A32.226,32.226,0,0,0,376,342.06V280a24.042,24.042,0,0,1,16-22.629V288a48.078,48.078,0,0,0,40,47.333V352c-4.967,0-10.049-.3-14.987.345A72.15,72.15,0,0,0,353.906,407.6ZM428.281,416h.406l9.656,9.657A9.012,9.012,0,0,1,440.97,432a8.97,8.97,0,0,1-15.313,6.343l-7.363-7.362ZM432,480a48.268,48.268,0,0,1-36.475-16.832,7.981,7.981,0,0,0,3.131-2.73l6.936-10.4A31.983,31.983,0,0,0,464,432a31.586,31.586,0,0,0-3.089-13.7c-.373-.787-.784-1.549-1.217-2.3h17.571A48.025,48.025,0,0,1,432,480Z"/><rect x="48" y="208" width="16" height="48"/></g></svg>'
    }
];

const a = 1;

export {data};