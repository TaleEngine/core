const { min, max } = Math

export default function clamp(minValue: number, value: number, maxValue: number) {
    return max(minValue, min(value, maxValue))
}
