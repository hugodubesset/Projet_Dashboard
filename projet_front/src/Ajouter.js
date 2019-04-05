import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Ajouter.css';


export default class Ajouter extends React.Component {


    state = {
        //artists
        Name:'',
        Birth:0,
        Followers:0,
        Album:'',
        //albums
        Title:'',
        Release:0,
        Genre:'',
        Cover_url:'',
        Tracks:'',
        //tracks
        Title1:'',
        Duration:0,
        Listenings:0,
        Likes:0,
        Featuring:''
    }


    handleChange1 = event => {
        this.setState({ Name: event.target.value });
    }
    handleChange2 = event => {
        this.setState({ Birth: event.target.value });
    }
    handleChange3 = event => {
        this.setState({ Followers: event.target.value });
    }
    handleChange4 = event => {
        this.setState({ Album: event.target.value });
    }
    handleChange5 = event => {
        this.setState({ Title: event.target.value });
    }
    handleChange6 = event => {
        this.setState({ Release: event.target.value });
    }
    handleChange7 = event => {
        this.setState({ Genre: event.target.value });
    }
    handleChange8 = event => {
        this.setState({ Cover_url: event.target.value });
    }
    handleChange9 = event => {
        this.setState({ Tracks: event.target.value });
    }
    handleChange10 = event => {
        this.setState({ Title1: event.target.value });
    }
    handleChange11 = event => {
        this.setState({ Duration: event.target.value });
    }
    handleChange12 = event => {
        this.setState({ Listenings: event.target.value });
    }
    handleChange13 = event => {
        this.setState({ Likes: event.target.value });
    }
    handleChange14 = event => {
        this.setState({ Featuring: event.target.value });
    }



    handleSubmit = event => {
        event.preventDefault();

        const artists = {
            Name: this.state.Name,
            Birth: this.state.Birth,
            Followers: this.state.Followers,
            Album: this.state.Album
        };

        axios.put('http://localhost:3000/artist', artists )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    handleSubmit2 = event => {
        event.preventDefault();

        const albums = {
            Title: this.state.Title,
            Release: this.state.Release,
            Genre: this.state.Genre,
            Cover_url: this.state.Cover_url,
            Tracks: this.state.Tracks
        };

        axios.put('http://localhost:3000/album', albums )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    handleSubmit3 = event => {
        event.preventDefault();

        const tracks = {
            Title1: this.state.Title1,
            Duration: this.state.Duration,
            Listenings: this.state.Listenings,
            Likes: this.state.Likes,
            Featuring: this.state.Featuring
        };

        axios.put('http://localhost:3000/track', tracks )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }




    render() {
        return (

            <div className="App-header">
                <div className="titre"> <h2>Sur cette page, Vous pouvez ajouter un album, un artiste ou un titre :</h2> </div>

                <div className="row">
                    <div className="col-lg-4 col-md-2">
                <div className="form2">
                    <Form onSubmit={this.handleSubmit2}>
                        <h4>Ajout d'un album:</h4>
                        <FormGroup>
                            <Label for="text">Titre</Label>
                            <Input type="text" placeholder="Ajouter le titre" name="Title" onChange={this.handleChange5}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="number">Année de sortie</Label>
                            <Input type="number" placeholder="Ajouter année de sortie" name="Release" onChange={this.handleChange6}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="text">Genre de l'album</Label>
                            <Input type="text" placeholder="Ajouter le genre" name="Genre" onChange={this.handleChange7}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="text">Cover_URL</Label>
                            <Input type="text" placeholder="Ajouter la cover url" name="Cover_url" onChange={this.handleChange8}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="text">Musique de référence</Label>
                            <Input type="text" placeholder="Ajouter une musique de référence" name="Tracks" onChange={this.handleChange9}/>
                        </FormGroup>
                        <Button>Enregistrer</Button>
                    </Form>
                </div>
                    </div>
                    <div className="col-lg-4 col-md-2">
                        <div className="form">
                            <Form onSubmit={this.handleSubmit}>
                                <h4>Ajout d'un artiste:</h4>
                                <FormGroup>
                                    <Label for="text">Nom</Label>
                                    <Input type="text" placeholder="Ajouter le nom de l'artiste" name="Name" onChange={this.handleChange1}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="number">Année de Naissance</Label>
                                    <Input type="number" placeholder="Ajouter année de naissance" name="Birth" onChange={this.handleChange2}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="number">Nombre de followers</Label>
                                    <Input type="number" placeholder="En millionsSSSS" name="Followers" onChange={this.handleChange3}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="text">Album</Label>
                                    <Input type="text" placeholder="Album de référence" name="Album" onChange={this.handleChange4}/>
                                </FormGroup>
                                <Button>Enregistrer</Button>
                            </Form>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-2">
                <div className="form2">
                    <Form onSubmit={this.handleSubmit3}>
                        <h4>Ajout d'une musique:</h4>
                        <FormGroup>
                            <Label for="text">Titre</Label>
                            <Input type="text" placeholder="Ajouter le titre" onChange={this.handleChange10}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="number">Durée de la musique</Label>
                            <Input type="number" placeholder="En minutes" onChange={this.handleChange11}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="number">Nombre d'écoutes</Label>
                            <Input type="number" placeholder="En millions" onChange={this.handleChange12}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="number">Nombre de likes</Label>
                            <Input type="number" placeholder="En milliers" onChange={this.handleChange13}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="text">Featuring</Label>
                            <Input type="text" placeholder="Ajouter le featuring" onChange={this.handleChange14}/>
                        </FormGroup>
                        <Button>Enregistrer</Button>
                    </Form>
                </div>
                    </div>
                </div>
            </div>
        );
    }
}