document.addEventListener('DOMContentLoaded', () =>{

const toggleMenu= () => {
    const menu= document.getElementById('navMenu');
    if(menu)menu.classList.toggle('active');

};
window.toggleMenu= toggleMenu;

const scrollSection= (sectionId) =>{
    const section = document.getElementById('sectionId');

    if(!section) return;

    const headerHeight = 70;

    const sectionPosition = section.offsetTop - headerHeight;
    window.scrollTo({top: sectionPosition, behavior: 'smooth'});

    const menu= document.getElementById('navMenu');
    if(menu) menu.classList.remove('active');
}
      const handleSubmit= (event) =>{
        event.preventDefault();
        const form= document.getElementById('volunteerForm');
        if(!form) return;

        if(form.dataset.submiting === 'true') return;
        form.dataset.submiting= 'true'

        const nome= form.nome.value.trim();
        const email= form.email.value.trim();

        if(nome || !email){
            alert('Por favor preencha os dados');
            form.dataset.submiting = 'false';
            return;
        }
      }

      const formData ={
        nome,
        email,
        telefone: form.telefone.value.trim(),
        disponibilidade: form.disponibilidade.value.trim(),
        experiencia: form.experiencia.value.trim(),
        motivacao: form.motivacao.trim(),
        dataCadastro: new Date() .toLocaleDateString()
      };

      let voluntarios = JSON.parse(localStorage.getItem('voluntarios') || []);
      voluntarios.push(formData)
      localStorage.setItem('voluntarios', JSON.stringify(voluntarios));

      const sucessMessage = document.getElementById('sucessMessage');
      if(sucessMessage){
        sucessMessage.classList.add('show');
        sucessMessage.scrollIntoView({behavior: "smooth", block:'center'});
      }

      setTimeout(() => sucessMessage.remove('show'), 5000);

      setTimeout(()=>{
          form.reset();
          form.dataset.submiting = 'false';
          }, 2000);

          exibirVoluntarios();
    

    const form = document.getElementById('volunteerForm');
    if(form) form.addEventListener('submit',handleSubmit);

    const exibirVoluntarios = () => {
        const voluntarios= JSON.parse(localStorage.getItem('voluntarios') || []);

        const tabelaContainer = document.getElementById('tabelaVoluntarios');

        if(!tabelaContainer) return;

        if(voluntarios.lenght ===0){
            tabelaContainer.innerHTML = '<p>Ninguém Cadastrado ainda </p>';
            return;

            let html = '<table border=1 cellpadding="5" cellpadding= "0"';
            html += '<tr><th>Nome</th></tr><tr><th>Email</th></tr><tr><th>Telefone</th></tr><tr><th>Disponibilodade</th></tr>';

                  }
    }
});