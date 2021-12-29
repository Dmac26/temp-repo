import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { GovBannerComponent } from './gov-banner.component';

describe('GovBannerComponent', () => {
  let component: GovBannerComponent;
  let fixture: ComponentFixture<GovBannerComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovBannerComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have banner text reading `Official website of the U.S. government - `', () => {
    const bannerText = de.query(By.css('p')).nativeElement;
    expect(bannerText.innerHTML).toContain('Official website of the U.S. government - ');
  });

  it('should have a toggle button with the text `Here\'s how you know`', () => {
    const buttonText = de.query(By.css('button span')).nativeElement;
    expect(buttonText.innerHTML).toContain(`Here's how you know`);
  });

  it('should toggle the banner open and close', () => {
    expect(component.expandBanner).toBeFalsy();
    component.toggleBanner();
    expect(component.expandBanner).toBeTruthy();
  });
});
