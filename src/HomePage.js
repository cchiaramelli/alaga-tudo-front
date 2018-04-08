import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Container, Input, Button, Dropdown, Menu, Image } from 'semantic-ui-react';
import logo from './images/umbrella-car.svg';
import { locationsLatLong } from './constants';


export const getProbabilities = (name, email, telephone, location, date, daysPredict) => fetch('https://alagatudo.now.sh/predict', {
  method: 'POST',
  mode: 'no-cors',
  body: JSON.stringify({
    name,
    email,
    telephone,
    location,
    date,
    daysPredict
  })
})
  .then(res => res.json())
  .catch((err) => {
    console.log(err);
    return null;
  });

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
    id: 'location',
    name: 'Subprefeitura',
    type: 'DropDown'
  },
  {
    id: 'date',
    name: 'Data',
    type: 'Text'
  },
  {
    id: 'predict_days',
    name: 'Dias para Prever',
    type: 'Text'
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
  state = { selectorValue: null }

  buttonSubmit = () => {
    if (document.getElementById('name')) {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const telephone = document.getElementById('telephone');
      const date = document.getElementById('date');
      const predict_days = document.getElementById('predict_days');
      const response = getProbabilities(name.value, email.value, telephone.value, locationsLatLong[this.state.selectorValue], date.value, predict_days.value);
      console.log('olar');
      console.log(response);
      name.value = '';
      email.value = '';
      telephone.value = '';
      date.value = '';
      predict_days.value = '';
    }
  }

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
          <Menu style={{ height: '72px', margin: '0px' }} borderless>
            <Menu.Item style={{ margin: '0px auto' }}>
              <Image src={logo} size="mini" />
            </Menu.Item>
          </Menu>
          <div style={{
 background: 'linear-gradient(to right bottom, #1e5799 0%,#7db9e8 100%)', height: '700px', display: 'flex', justifyContent: 'center', flexDirection: 'column'
}}
          >
            <Container>
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
                        <Dropdown id={field.id} placeholder="Select Friend" fluid selection options={locationOptions} style={{ width: '400px', margin: '0px auto' }} onChange={(event, data) => { this.setState({ selectorValue: data.value }); }} />
                      </Grid.Column>);
                  }
                    return null;
                })}
                </Grid.Row>
                <Button onClick={this.buttonSubmit} style={{ height: '48px', margin: '0px auto', marginTop: '32px' }}>Confirmar</Button>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
