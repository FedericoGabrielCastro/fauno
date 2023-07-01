interface ITableEditButton {
    handleEditButtonClick: (id: string) => void
    handleConfirmEdit: (id: string) => void
    handleCancel: (id: string) => void
    publicationId: string
    enabledInputId: string | null
    buttonDisable: boolean
}

export const TableEditButton = ({ publicationId, handleEditButtonClick, enabledInputId, handleConfirmEdit, buttonDisable, handleCancel }: ITableEditButton) => {
    const valueButton = publicationId === enabledInputId ? true : false
    const textButtonValue = buttonDisable ? 'cancel' : valueButton ? 'confirm' : 'edit'
    const buttonFunction = buttonDisable ? handleCancel : valueButton ? handleConfirmEdit : handleEditButtonClick

    const handleClick = () => {
        buttonFunction(publicationId)
    }

    return <button onClick={handleClick}>{textButtonValue}</button>
}
