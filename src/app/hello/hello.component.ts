import { Component, Input, OnInit } from '@angular/core';
import * as React from 'react';
import { SynapseClient } from 'synapse-react-client';
import MarkdownSynapse, {
  MarkdownSynapseProps,
} from 'synapse-react-client/dist/containers/MarkdownSynapse';
import { SynapseContextProvider } from 'synapse-react-client/dist/utils/SynapseContext';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {
  @Input() ownerId: string = '';

  constructor() {}

  ngOnInit(): void {
    const wikiProps: MarkdownSynapseProps = {
      ownerId: this.ownerId || 'syn18142975', // testLegoMan
    };
    const wikiContent = React.createElement(MarkdownSynapse, wikiProps);
    // const props = {
    //   synapseContext: {
    //     accessToken: undefined,
    //     isInExperimentalMode: false,
    //     utcTime: SynapseClient.getUseUtcTimeFromCookie(),
    //   },
    // };

  }
}
