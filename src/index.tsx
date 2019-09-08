import React, { FunctionComponent } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

interface Props extends TextProps {
    color?: string;
    size?: number;
    weight?: TextStyle['fontWeight'];
    lineHeight?: number;
}

export const UIText: FunctionComponent<Props> = (props) => {
    const { color, size, weight, lineHeight, style, ...rest } = props;

    return <Text style={[{ color, fontSize: size, lineHeight, fontWeight: weight }, style]} {...rest} />;
};

UIText.defaultProps = {
    color: '#333',
    size: 14,
};
