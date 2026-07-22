import { TestBed } from '@angular/core/testing';
import { ElementRef, Renderer2 } from '@angular/core';
import { Highlight } from './highlight';

describe('Highlight', () => {
  it('should create an instance', () => {
    const mockElRef = { nativeElement: document.createElement('div') } as ElementRef;
    const mockRenderer = {
      setStyle: jasmine.createSpy('setStyle'),
      removeStyle: jasmine.createSpy('removeStyle'),
    } as unknown as Renderer2;

    const directive = new Highlight(mockElRef, mockRenderer);
    expect(directive).toBeTruthy();
  });
});
