import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Ajouter.css';


export default class Ajouter extends React.Component {
    render() {
        return (

            <div className="App-header">
                <div className="titre"> <h2>Sur cette page, Vous pouvez ajouter un album, un artiste ou un titre :</h2> </div>

                <div className="row">
                    <div className="col-lg-4 col-md-2">
                <div className="form2">
                    <Form>
                        <h4>Ajout d'un album:</h4>
                        <FormGroup>
                            <Label for="Titre">Titre</Label>
                            <Input type="Titre" name="Titre" id="Titre" placeholder="Ajouter le titre" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Date">Date de sortie</Label>
                            <Input type="Date" name="Date" id="Date" placeholder="Ajouter date de sortie" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Genre">Genre de l'album</Label>
                            <Input type="Genre" name="Genre" id="Genre" placeholder="Ajouter le genre" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Cover">Cover_URL</Label>
                            <Input type="Cover" name="Cover" id="Cover" placeholder="Ajouter la cover url" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Musique">Musique de référence</Label>
                            <Input type="Musique" name="Musique" id="Musique" placeholder="Ajouter une musique de référence" />
                        </FormGroup>
                        <Button>Enregistrer</Button>
                    </Form>
                </div>
                    </div>
                    <div className="col-lg-4 col-md-2">
                        <div className="form">
                            <Form>
                                <h4>Ajout d'un artiste:</h4>
                                <FormGroup>
                                    <Label for="Nom">Nom</Label>
                                    <Input type="Nom" name="Nom" id="Nom" placeholder="Ajouter le nom de l'artiste" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Naissance">Date de Naissance</Label>
                                    <Input type="Naissance" name="Naissance" id="Naissance" placeholder="Ajouter date de naissance" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Followers">Nombre de followers</Label>
                                    <Input type="Followers" name="Followers" id="Followers" placeholder="Ajouter nombre de followers" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Album">Album</Label>
                                    <Input type="Album" name="Album" id="Album" placeholder="Album de référence" />
                                </FormGroup>
                                <Button>Enregistrer</Button>
                            </Form>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-2">
                <div className="form2">
                    <Form>
                        <h4>Ajout d'une musique:</h4>
                        <FormGroup>
                            <Label for="Titre">Titre</Label>
                            <Input type="Titre" name="Titre" id="Titre" placeholder="Ajouter le titre" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Duree">Durée de la musique</Label>
                            <Input type="Duree" name="Duree" id="Duree" placeholder="Ajouter la durée de la musique" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Ecoute">Nombre d'écoutes</Label>
                            <Input type="Ecoute" name="Ecoute" id="Ecoute" placeholder="Ajouter le nombre d'écoutes" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Like">Nombre de likes</Label>
                            <Input type="Like" name="Like" id="Like" placeholder="Ajouter le nombre de likes" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Featuring">Featuring</Label>
                            <Input type="Featuring" name="Featuring" id="Featuring" placeholder="Ajouter le featuring" />
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