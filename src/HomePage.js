import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Container, Input, Button, Dropdown, Menu, Image, Modal } from 'semantic-ui-react';
import logo from './images/umbrella-car.svg';
import feliz from './images/feliz.jpeg';
import triste from './images/triste.jpeg';
import { locationsLatLong } from './constants';

const fetch = require('node-fetch');

global.Headers = fetch.Headers;

// export const getProbabilities = (name, email, phone, location, date, daysPredict) => ();


// fetch('https://alagatudo.now.sh/predict', {
//   method: 'POST',
//   mode: 'no-cors',
//   body: {
//     name,
//     email,
//     phone,
//     location,
//     date,
//     daysPredict
//   }
// })
//   .then(res => res.json())
//   .catch((err) => {
//     console.log(err);
//     return null;
//   });

const sectionForms = [
  {
    id: 'name',
    name: 'Nome',
    type: 'Text',
  },
  {
    id: 'email',
    name: 'Email',
    type: 'Text'
  },
  {
    id: 'telephone',
    name: 'Telefone',
    type: 'Text'
  },
  {
    id: 'predict_days',
    name: 'Dias para Prever',
    type: 'Text'
  },
  {
    id: 'date',
    name: 'Data',
    type: 'Text'
  },
  {
    id: 'location',
    name: 'Subprefeitura',
    type: 'DropDown'
  }
];

const locationOptions = [
  {
    text: 'Aricanduva',
    value: 'Aricanduva',
  },
  {
    text: 'Campo Limpo',
    value: 'CampoLimpo',
  },
  {
    text: 'Butantã',
    value: 'Butanta',
  },
  {
    text: 'Santana',
    value: 'Santana',
  },
  {
    text: 'Sé',
    value: 'Se',
  },
  {
    text: 'Penha',
    value: 'Penha',
  },
  {
    text: 'Perus',
    value: 'Perus',
  },
  {
    text: 'Pirituba',
    value: 'Pirituba',
  },
  {
    text: 'Ermelindo Matarazzo',
    value: 'ErmelindoMatarazzo',
  },
  {
    text: 'Jaçana',
    value: 'Jaçana',
  },
  {
    text: 'Vila Mariana',
    value: 'VilaMariana',
  },
  {
    text: 'Guainases',
    value: 'Guainases',
  },
  {
    text: 'Itaquera',
    value: 'Itaquera',
  },
  {
    text: 'Sapopemba',
    value: 'Sapopemba',
  },
  {
    text: 'Lapa',
    value: 'Lapa',
  },
  {
    text: 'Capela do Socorro',
    value: 'CapelaDoSocorro',
  },
  {
    text: 'Casa Verde',
    value: 'CasaVerde',
  },
  {
    text: 'São Mateus',
    value: 'SaoMateus',
  },
  {
    text: 'Parelheiros',
    value: 'Parelheiros',
  },
  {
    text: 'Cidade Tiradentes',
    value: 'CidadeTiradentes',
  },
  {
    text: 'Vila Maria',
    value: 'VilaMaria',
  },
  {
    text: 'São Miguel Paulista',
    value: 'SaoMiguel Paulista',
  },
  {
    text: 'Vila Prudente',
    value: 'VilaPrudente',
  },
  {
    text: 'Cidade Ademar',
    value: 'CidadeAdemar',
  },
  {
    text: 'Ipiranga',
    value: 'Ipiranga',
  },
  {
    text: 'Jabaquara',
    value: 'Jabaquara',
  },
  {
    text: 'Mooca',
    value: 'Mooca',
  },
  {
    text: 'Santo Amaro',
    value: 'SantoAmaro',
  },
  {
    text: 'M`BoiMirim',
    value: 'MBoiMirim',
  },
  {
    text: 'Itaim Paulista',
    value: 'ItaimPaulista',
  },
  {
    text: 'Pinheiros',
    value: 'Pinheiros',
  },
  {
    text: 'Freguesia do Ó',
    value: 'Freguesia',
  },
];

class HomePage extends Component {
  state = {
    selectorValue: null,
    probability: true,
    open: false
  }

  buttonSubmit = async () => {
    this.setState({ open: true });
    if (document.getElementById('email')) {
      console.log('dinossauro rex');
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const telephone = document.getElementById('telephone');
      const date = document.getElementById('date');
      const predict_days = document.getElementById('predict_days');
      const a = await fetch('https://alagatudo.now.sh/predict', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          date: '2018-04-08T20:30:33.304Z',
          location: 'butanta',
          name: 'Cristiano',
          email: 'cristianochiaramelli@gmail.com'
        })
      }).then((res) => {
        console.log('this is res', res);
      }).catch((err) => {
        console.log(err);
      });
      console.log('olar');
      console.log(a);
      name.value = '';
      email.value = '';
      telephone.value = '';
      date.value = '';
      predict_days.value = '';
    }
  }

   close = () => this.setState({ open: false })

   render() {
     return (
       <div>
         <Helmet
           title="ClassApp"
           meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
           link={[
          { rel: 'stylesheet', href: '//assets.classapp.co/semantic/semantic.min.css' },
        ]}
         />
         <div>
           <Menu style={{ height: '72px', margin: '0px', boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)' }} borderless>
             <Menu.Item style={{ margin: '0px auto' }} vericalAlign="middle">
               <Image src={logo} style={{ margin: 'auto 4px' }} size="mini" />
               <h2 style={{ color: '#1e5799', margin: '16px 4px 0px' }}>AlagaChuber</h2>
             </Menu.Item>
           </Menu>
           <div style={{
 background: 'linear-gradient(to right bottom, #1e5799 0%,#7db9e8 100%)', height: '700px', display: 'flex', justifyContent: 'center', flexDirection: 'column'
}}
           >
             <Container textAlign="center">
               <Container text>
                 <h2 style={{ color: '#ffffff', marginBottom: '32px' }}>Olá jovem forasteiro, o AlagaChuber é uma plataforma que permite você saber se as ruas da sua região irão alagar hoje.</h2>
                 <p style={{ color: '#ffffff', marginBottom: '64px' }}>Preencha o formulário abaixo e receba as informações diariamente no seu celular ou email. E sempre que quiser pode acessar e consultar a probabilidade</p>
               </Container>
               <Grid stackable>
                 <Grid.Row columns={2} textAlign="center">
                   {sectionForms.map((field) => {
                  if (field.type === 'Text') {
                    return (
                      <Grid.Column style={{ padding: '16px 0px' }}>
                        <Input id={field.id} label={field.name} style={{ width: '400px' }} />
                      </Grid.Column>);
                  } else if (field.type === 'DropDown') {
                    return (
                      <Grid.Column style={{ padding: '16px 0px' }}>
                        <Dropdown id={field.id} placeholder="Selecione sua região ..." fluid selection options={locationOptions} style={{ width: '400px', margin: '0px auto' }} onChange={(event, data) => { this.setState({ selectorValue: data.value }); }} />
                      </Grid.Column>);
                  }
                    return null;
                })}
                 </Grid.Row>
                 <Modal
                   open={this.state.open}
                   onClose={this.close}
                   trigger={
                     <Button
                       circular
                       onClick={this.buttonSubmit}
                       style={{
backgroundColor: '#1e5799', height: '48px', margin: '0px auto', marginTop: '32px', color: '#ffffff', width: '200px'
}}
                     >Confirmar
                     </Button>
                }
                 >
                   <Modal.Content>
                     <div style={{ textAlign: 'center' }}>
                       {!!this.state.probability &&
                       <div>
                         <Image src={feliz} style={{ margin: '32px auto' }} />
                         <p>BIIIRL!!! Hoje não haverão enchentes na sua região</p>
                       </div>}
                       {!this.state.probability &&
                       <div>
                         <Image src={triste} style={{ margin: '32px auto' }} />
                         <h2>NÃO VAI DA NÃO!!! Sua região tem altas chances de alagar</h2>
                       </div>}
                       <Button
                         style={{
  backgroundColor: '#1e5799', height: '48px', margin: '0px auto', marginTop: '32px', color: '#ffffff', width: '100px'
  }}
                         onClick={() => this.setState({ open: false })}
                         circular
                       >OK
                       </Button>
                     </div>
                   </Modal.Content>
                 </Modal>
               </Grid>
             </Container>
           </div>
         </div>
       </div>
     );
   }
}

export default HomePage;
