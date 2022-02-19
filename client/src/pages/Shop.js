import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_SHAPES } from '../utils/queries';

const Shop = () => {
    const { loading, data } = useQuery(QUERY_SHAPES);
    const shapes = data?.shapes || [];

    const renderShapes = () => {
        if (loading) {
            return <p>Loading...</p>;
        }else{
            return (
                <tbody>
                    {shapes.map((shape, index) => (
                    <tr key={shape._id}>
                        <td>{index + 1}</td>
                        <td>{shape.name}</td>
                    </tr>
                    ))}
                </tbody>
            )
        }
    };

    return (
        <main>
            Here are products:

            {renderShapes()}
        </main>
    )
}

export default Shop;