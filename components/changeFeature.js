import IconThumb from '../components/iconThumb'

export default function changeFeature({ featureTitle, outcome }) {
    return (
        <tr>
            <td>{ featureTitle }</td>
            <td><IconThumb outcome={outcome} /></td>
        </tr>
    )
}