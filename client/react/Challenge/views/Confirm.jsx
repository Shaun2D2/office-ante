import React from 'react';
import Card from '../../components/Card';

const Confirm = (props) => (
    <Card>
        <table className="table is-fullwidth">
            <tbody>
                <tr>
                    <td><strong>Challenging:</strong></td>
                    <td>Jonn@coolexample.com</td>
                </tr>
                <tr>
                    <td><strong>The Challenge:</strong></td>
                    <td>This is a challenge to confirm the super nte bob thest consumer test bob.</td>
                </tr>
                <tr>
                    <td><strong>The Stakes:</strong></td>
                    <td>2 Tacos</td>
                </tr>
            </tbody>
        </table>
        <button className="button is-primary" onClick={props.submitChallenge}>Looks Good!</button>
    </Card>
)

export default Confirm;
