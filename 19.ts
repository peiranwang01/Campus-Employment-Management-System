export default function GdsRow({ id, children }: GdsRowProps) {
    return (
        <tr id={id} className="govuk-table__row">
            {children}
        </tr>
    )
}
