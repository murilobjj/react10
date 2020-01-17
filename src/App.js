import React, {useEffect,useState} from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';




//componente: Bloco isolado de HTML,CSS,JS o qual não interfere no restante d aplicação
//estado:Informações mantidas pelo componente (lembrar:Imutabilidade)
//propriedade:Informações que um compoinente Pai passa para o componente filho


function App() {

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLogitude] = useState('');

   useEffect(() => {
  },[]);

      async function handleAddDev(e) {
        e.preventDefault();

      }

  

  
  return (
     <div id="app">
       <aside>
       <strong>Cadastrar</strong>
       <form onSubmit={handleAddDev}>
       <div className="input-block">
         <label htmlFor="github_username">Usuário do Github</label>
         <input 
         name="github_username"
          id="github_username" 
          required
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)}
          />
         </div>

         <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input
           name="techs" 
           id="techs" 
           required
           value={techs}
          onChange={e => setTechs(e.target.value)}
           />
         </div>

         <div className="input-group">
          <div class="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input 
            type= "number"
            name="latitude"
             id="latitude"
              required 
              value={latitude}
              onChange={e =>setLatitude(e.target.value)}
              />
          </div>
         
         <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input 
          type="number" 
          name="longitude"
           id="longitude" 
           required 
           value={longitude}
           onChange={e=> setLogitude(e.target.value)}
           />
         </div>
         </div>
  
         <button type="submit">Salvar</button>
       </form>
       </aside>

       <main>

         <ul>
           <li className="dev-item">
             <header>
               <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v4" alt="diego3g"/>
               <div className="user-info">
                 <strong>Diego Fernandes</strong>
                 <span>ReactJS, React Native,  NodeJS</span>
               </div>
             </header>
             <p>CTO na @Rocketseat. Apainxonado pelas melhores Tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/diego3g">Acessar perfil no Github</a>
           </li>

           <li className="dev-item">
             <header>
               <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4" alt="diego fernandes"/>
               <div className="user-info">
                 <strong>Diego Fernandes</strong>
                 <span>ReactJS, React Native,  NodeJS</span>
               </div>
             </header>
             <p>CTO na @Rocketseat. Apainxonado pelas melhores Tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/diego3g">Acessar perfil no Github</a>
           </li>

           <li className="dev-item">
             <header>
               <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4" alt="diego fernandes"/>
               <div className="user-info">
                 <strong>Diego Fernandes</strong>
                 <span>ReactJS, React Native,  NodeJS</span>
               </div>
             </header>
             <p>CTO na @Rocketseat. Apainxonado pelas melhores Tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/diego3g">Acessar perfil no Github</a>
           </li>

           <li className="dev-item">
             <header>
               <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4" alt="diego fernandes"/>
               <div className="user-info">
                 <strong>Diego Fernandes</strong>
                 <span>ReactJS, React Native,  NodeJS</span>
               </div>
             </header>
             <p>CTO na @Rocketseat. Apainxonado pelas melhores Tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/diego3g">Acessar perfil no Github</a>
           </li>
         </ul>
           
      </main>
     </div>
  );
}

export default App;
