import { memo, type FC, useEffect, useState } from 'react'
import classnames from 'classnames'
import { useSelector } from 'react-redux'

import { Select } from '@/shared/ui'
import { useAppDispatch } from '@/shared/lib/hooks'

import { fetchPokemonesTypesThunk } from '../../model/services/fetchPokemonesTypesThunk/fetchPokemonesTypesThunk'
import { selectPokemonesTypes } from '../../model/selectors/selectPokemonesTypes/selectPokemonesTypes'
import { selectPokemonesTypesIsLoading } from '../../model/selectors/selectPokemonesTypesIsLoading/selectPokemonesTypesIsLoading'

import styles from './PokemonesTypeSelector.module.scss'

interface PokemonesTypeSelectorProps {
    className?: string
    onChange?: (type?: string) => void
    onClear?: () => void
    defaultType?: string
}

const PokemonesTypeSelector: FC<PokemonesTypeSelectorProps> = memo((props) => {
    const { className, onChange, onClear, defaultType } = props

    const [currentType, setCurrentType] = useState<string>('')

    const dispatch = useAppDispatch()

    const types = useSelector(selectPokemonesTypes)
    const isLoading = useSelector(selectPokemonesTypesIsLoading)

    const mappedTypes = types.map((t) => ({ label: t.name, value: t.id }))

    const changeHandler = (type: string) => {
        onChange?.(type)
        setCurrentType(type)
    }

    useEffect(() => {
        const effect = async () => {
            const result = await dispatch(fetchPokemonesTypesThunk())
            if (result.meta.requestStatus === 'fulfilled' && Array.isArray(result.payload)) {
                const value =
                    result.payload.find?.((t) => String(t.id) === defaultType)?.name || 'Choose type'

                setCurrentType(value)
            }
        }

        void effect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    return (
        <Select
            className={classnames(styles.PokemonesTypeSelector, className)}
            onChange={changeHandler}
            loading={isLoading}
            options={mappedTypes}
            value={currentType}
            defaultValue={'Choose type'}
            allowClear
            onClear={onClear}
            placeholder={'Choose type'}
        />
    )
})

export default PokemonesTypeSelector
