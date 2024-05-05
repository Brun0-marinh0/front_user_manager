import { Component, OnInit, ElementRef } from '@angular/core';
import { AccountService } from '../../../account/shared/account.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent {
  count!: any
  adminActivated: string | undefined
  adminDeactivated: string | undefined

  commonActivated: string | undefined
  commonDeactivated: string | undefined

  constructor(
    private accountService: AccountService,
    private elementRef: ElementRef
  ){
    
  }

  ngOnInit(): void {
    this.getCount()
  }

  getCount(): void{
    this.accountService.getCount().subscribe(
      (data) => {
        this.count = data
        this.adminActivated = data.totalPerRole[0]?.totalActivated
        this.adminDeactivated = data.totalPerRole[0]?.totalDeactivated
        this.commonActivated = data.totalPerRole[1]?.totalActivated
        this.commonDeactivated = data.totalPerRole[1]?.totalDeactivated
        this.createPieChart();
      },
      (error) => {
        console.error('Erro ao obter dados:', error);
      }
    )
  }

 

  private createPieChart(): void {
    console.log(typeof(this.adminActivated))
    const data = [Number(this.adminDeactivated), Number(this.adminActivated), Number(this.commonActivated), Number(this.commonDeactivated)];
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;
  
    console.log('Dados para o gráfico:', data); // Verifica os dados antes de criar o gráfico
  
    const svg = d3.select(this.elementRef.nativeElement)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);
  
    // Cores personalizadas
    const customColors = ['#073b4c', '#1955DB', '#0BA16C', '#ff9c10'];
  
    // Escala de cores personalizada
    const color = d3.scaleOrdinal()
      .domain(data.map((d, i) => i.toString()))
      .range(customColors);
  
    const pie = d3.pie<any>().value((d: any) => d);
    const dataReady = pie(data);
  
    svg.selectAll('slices')
      .data(dataReady)
      .enter()
      .append('path')
      .attr('d', (d: any) => {
        const arcGenerator = d3.arc()
          .innerRadius(0)
          .outerRadius(radius);
      
        return arcGenerator(d) as string;
      })
      .attr('fill', (d: any, i: number) => color(i.toString()) as string)
      .style('stroke-width', '2px');
  
    svg.selectAll('slices')
      .data(dataReady)
      .enter()
      .append('text')
      .text((d: any) => d.data)
      .attr('transform', (d: any) => `translate(${d3.arc().innerRadius(0).outerRadius(radius).centroid(d)})`)
      .style('text-anchor', 'middle')
      .style('font-size', '12px');
  }
  
  

}
