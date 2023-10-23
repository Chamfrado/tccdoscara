/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Header from "../Components/Header/Header";
import { Alert, Card, CardBody, CardTitle, Label, Row } from "reactstrap";
import FaqTable from "../Components/FAQTable/FaqTable";


const FaqView = ({handleLogin, user}) => {

    const handleExit = () => {
        handleLogin();
    };

    const [saveAlert, setSaveAlert] = useState(false);
    const [deleteAlert, setDeleteAlert] = useState(false);
    const [addAlert, setAddAlert] = useState(false);


    const onSaveSucessfull = () => {
        setSaveAlert(true);
    }
    const onDismissSave = () => setSaveAlert(false);

    const onDeleteSucessfull = () => {
        setDeleteAlert(true);
    }
    const onDismissDelete = () => setDeleteAlert(false);

    const onAddSucessfull = () => {
        setAddAlert(true);
    }
    const onDismissAdd = () => setAddAlert(false);



    return (
        <div>
            <Header handleLogout={handleExit} user={user} />

            <Row>
                <Card>
                    <CardBody>
                        <CardTitle>
                            {saveAlert && <Alert isOpen={saveAlert} toggle={onDismissSave}>FAQ Atualizada com Sucesso!</Alert>}
                            {deleteAlert && <Alert isOpen={deleteAlert} toggle={onDismissDelete}>FAQ Deletada com Sucesso!</Alert>}
                            {addAlert && <Alert isOpen={addAlert} toggle={onDismissAdd}>FAQ Adicionada com Sucesso!</Alert>}
                            <Label className='h1' style={{ display: 'flex', alignSelf: 'start', justifyContent: 'start' }}> Central de Perguntas e Respostas</Label>
                        </CardTitle>

                        <Row>
                            <FaqTable onSaveSucess={onSaveSucessfull} onDeleteSucess={onDeleteSucessfull} onAddSucess={onAddSucessfull} />
                        </Row>

                    </CardBody>
                </Card>
            </Row>
        </div>
    )
}

export default FaqView;