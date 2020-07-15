import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit, FiPlus} from 'react-icons/fi';

import Header from '../../../Header.js'

import './styles.css'

export default function NewPatient() {
    return (
        <section className="body">
            <Header title="Dr." />
            <section className="container-dash-patient-details">
                <div className="detailsRowJustify">
                    <div className="detailsItem">
                        <h3>Nome</h3>
                        <p>Miriam C B Rodrigues</p>
                        <div className="detailsItem" style={{marginTop:'25px'}}>
                            <h3>Normal / Cesária</h3>
                            <p>Cesária</p>
                        </div>
                    </div>
                    <div className="detailsItem">
                        <h3>Email</h3>
                        <p>miriam@hotmail.com</p>
                        <div className="detailsItemRow">
                            <div className="detailsItemRowTree">
                                <h3>G</h3>
                                <p>0</p>
                            </div>
                            <div className="detailsItemRowTree">
                                <h3>P</h3>
                                <p>0</p>
                            </div>
                            <div className="detailsItemRowTree">
                                <h3>A</h3>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                    <div className="detailsItem">
                        <h3>DUM</h3>
                        <p>25/06/2020</p>
                    </div>
                    <div className="detailsItem">
                        <h3>DPP</h3>
                        <p>25/06/2020</p>
                    </div>
                    <a href="">
                        <FiTrash2 size={48} color="#000" />
                    </a>
                </div>
                <div className="detailsItem" style={{marginTop:'25px', display:'flex', width: '100%', flexDirection: 'row', justifyContent:'space-between'}}>
                    <div style={{flex:0.9}}>
                        <h3>Observação</h3>
                        <p>uahsudhsaudhausdhuashduashasuhaushua</p>
                    </div>
                    <div style={{flex:0.1}}>
                        <Link className="button">
                        Galeria
                        </Link>
                    </div>
                </div>
                <div className="tableExams">
                    <table className="exams">
                    <h3>Exames</h3>
                        <tr className="hor">
                            <th style={{backgroundColor: '#0163b6', color:'#fff', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', width: '15%'}}>Exame</th>
                            <th>Data</th>
                            <th>Resultado</th>
                            <th>Data</th>
                            <th>Resultado</th>
                        </tr>
                        <tr>
                            <th>ABO-RH</th>
                            <td>21/05/2019</td>
                            <td>NA</td>
                            <td>21/05/2019</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th>Glicemia</th>
                            <td>21/05/2019</td>
                            <td>NA</td>
                            <td>21/05/2019</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th>Hb/Ht</th>
                            <td>21/05/2019</td>
                            <td>NA</td>
                            <td>21/05/2019</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th>VDRL</th>
                            <td>21/05/2019</td>
                            <td>NA</td>
                            <td>21/05/2019</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th>HIV</th>
                            <td>21/05/2019</td>
                            <td>NA</td>
                            <td>21/05/2019</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th>Hepatite B</th>
                            <td>21/05/2019</td>
                            <td>NA</td>
                            <td>21/05/2019</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th>Hepatite C</th>
                            <td>21/05/2019</td>
                            <td>NA</td>
                            <td>21/05/2019</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th>Toxoplasmose</th>
                            <td>21/05/2019</td>
                            <td>NA</td>
                            <td>21/05/2019</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th>Rubêola</th>
                            <td>21/05/2019</td>
                            <td>NA</td>
                            <td>21/05/2019</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th style={{borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', borderBottom: '0'}}>Outros</th>
                            <td>21/05/2019</td>
                            <td>NA</td>
                            <td>21/05/2019</td>
                            <td>NA</td>
                        </tr>
                        <tfoot>
                            <tr>
                                <td>Ação</td>
                                <td colSpan={2} style={{borderRight: '1px black solid'}}> <Link to="/dashboard/doctor/exam/update"> <FiEdit size={32} color="#000" /> </Link> </td>
                                <td colSpan={2}> <Link to="/dashboard/doctor/exam/update"> <FiEdit size={32} color="#000" /> </Link> </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="tablePreNatal">
                    <table className="preNatal">
                        <div className="addPreNatal">
                            <h3>Pré Natal</h3>
                            <Link to="/dashboard/doctor/prenatal/new" className="button btnAdd"><FiPlus size={32} color="#fff" /></Link>
                        </div>
                        <tr>
                            <th style={{borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'}}>Data</th>
                            <th>IG</th>
                            <th>AU</th>
                            <th>PA</th>
                            <th>PESO</th>
                            <th>BCF</th>
                            <th>APRES</th>
                            <th>EDEMA</th>
                            <th>MF</th>
                            <th style={{borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}}>Ação</th>
                        </tr>
                        <tr>
                            <td>21/06/2020</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>
                                <Link to="/dashboard/doctor/prenatal/update" className="editMargin"><FiEdit size={32} color="#000" /></Link>
                                {/* <Link><FiTrash2 size={32} color="#000" /></Link> */}
                            </td>
                        </tr>
                    </table>
                </div>
                <Link className="button backForm" to="/dashboard/doctor">
                    Voltar
                </Link>
            </section>
        </section>
    )
 }