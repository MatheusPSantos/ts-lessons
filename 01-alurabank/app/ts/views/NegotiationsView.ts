class NegotiationsView {

  private element: Element;

  constructor(sel: string) {
    this.element = document.querySelector(sel);
  }

  update(): void {
    this.element.innerHTML = this.template();
  }

  template(): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>
        <tbody>

        </tbody>

        <tfoot>
        </tfoot>
      </table>
    `;
  }
}