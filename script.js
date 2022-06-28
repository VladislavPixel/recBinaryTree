class BinaryTreeConstruction{
	static resultTree = []
	static maxWidthRow = null
	static currentDepth = -1
	static main() {
		const value = this.getInt()
		this.maxWidthRow = value

		this.makeBranches(0, this.maxWidthRow - 1, this.currentDepth)
		this.display()
	}
	static makeBranches(left, right, depth) {
		if (left === right) {
			++depth
			this.setPositionForMatrixTree(left, depth)
			return
		}

		++depth
		const middleIndex = Math.floor((left + right) / 2)
		this.makeBranches(left, middleIndex, depth)
		this.makeBranches(middleIndex + 1, right, depth)

		this.setPositionForMatrixTree(middleIndex, depth)
	}
	static setPositionForMatrixTree(mid, depthValue) {
		if (!this.resultTree[depthValue]) {
			const newRow = []
			for (let m = 0; m < this.maxWidthRow; m++) {
				newRow[m] = "-"
			}
			this.resultTree[depthValue] = newRow
		}
		this.resultTree[depthValue][mid] = "X"
	}
	static display() {
		this.resultTree.forEach(row => {
			console.log(row.join("  "))
		})
	}
	static getWidthRowStringValue() {
		const result = prompt("Введите значение ширины строки", "")
		return result
	}
	static getInt() {
		const str = this.getWidthRowStringValue()
		return Number(str)
	}
}

BinaryTreeConstruction.main()
