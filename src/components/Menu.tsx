import { useRef, useState, useEffect } from 'react';
import { ElasticCoat, LevelContainer, LineTitle, Text, LineEntry, ArrowBack } from './Styles';

export interface MenuContent {
    title: string;
    entries?: (MenuContent | string)[];
}

export const MenuBody = (props: {
    content: MenuContent;
    onClickBefore?: () => void;
    onSizeChange: (size: number) => void;
    isNext?: boolean;
    isRoot?: boolean;
}) => {
    const { isNext } = props;
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedEntryIndex, setSelectedEntryIndex] = useState(-1);

    useEffect(() => {
        selectedEntryIndex < 0 && !isNext && props.onSizeChange(containerRef.current?.getBoundingClientRect().height ?? 0);
    }, [selectedEntryIndex, isNext]);

    const onResume = () => {
        setSelectedEntryIndex(-1);
        props.onSizeChange(containerRef.current?.getBoundingClientRect().height ?? 0);
    };

    const onClickEntry = (entry: MenuContent | string, i: number) =>
        typeof entry !== 'string' && entry.entries && entry.entries.length > 0 && setSelectedEntryIndex(i);

    return (
        <>
            <LevelContainer ref={containerRef} isPrev={selectedEntryIndex > -1} isNext={props.isNext}>
                {!props.isRoot && (
                    <LineTitle>
                        <ArrowBack onClick={props.onClickBefore}></ArrowBack>
                    </LineTitle>
                )}
                {props.content.entries?.map((entry, i) => (
                    <LineEntry
                        key={i}
                        arrow={typeof entry !== 'string' && entry.entries && entry.entries.length > 0 ? true : false}
                        onClick={() => onClickEntry(entry, i)}
                    >
                        <Text>{typeof entry === 'string' ? entry : entry.title}</Text>
                    </LineEntry>
                ))}
            </LevelContainer>
            {props.content.entries?.map(
                (entry, i) =>
                    typeof entry !== 'string' && (
                        <MenuBody
                            key={i}
                            content={entry}
                            onClickBefore={onResume}
                            onSizeChange={props.onSizeChange}
                            isNext={i !== selectedEntryIndex}
                        />
                    )
            )}
        </>
    );
};

export const Menu = (props: { content: MenuContent }) => {
    const [elasticCoatHeight, setElasticCoatHeight] = useState(0);

    return (
        <ElasticCoat height={elasticCoatHeight}>
            <MenuBody content={props.content} onSizeChange={(height) => setElasticCoatHeight(height)} isRoot />
        </ElasticCoat>
    );
};
